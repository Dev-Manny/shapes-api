const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 8;
const {
  success,
  created,
  badRequest,
  unauthorized,
} = require("../Response/index");
const UserService = require("../services/UserService");

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class User {
  static async postSignup(req, res) {
    let { name, email, password } = req.body;
    console.log(name);
    if (!name) return badRequest(res, `Please provide a name`, null);
    if (!email) return badRequest(res, `Please provide a email`, null);
    if (!password) return badRequest(res, `Please provide a passwird`, null);

    name = name.trim();
    email = email.trim();

    if (!regex.test(email)) return badRequest(res, `Invalid email!`, null);

    if (password.length < 6 || password.length > 32)
      return badRequest(
        res,
        `Password's length should be between 6 and 32`,
        null
      );

    try {
      const emailExists = await UserService.getUser({
        email: email,
      });

      if (emailExists) return badRequest(res, `Email already exists!`, null);

      // Hashed pasword
      const hashedPassword = await bcrypt.hashSync(password, saltRounds);

      const user = await UserService.signUp({
        name,
        email,
        password: hashedPassword,
      });

      const token = jwt.sign(
        { userId: user.id },
        `${process.env.TOKEN_SECRET}`,
        {
          expiresIn: "3d",
        }
      );

      return created(res, `Signup Successful`, { token, user });
    } catch (error) {
      return badRequest(res, `${error.message}`, null);
    }
  }

  static async postLogin(req, res) {
    let { email, password } = req.body;
    let passwordIsValid;
    if (!email) return badRequest(res, `Please provide a email`, null);
    if (!password) return badRequest(res, `Please provide a passwird`, null);

    email = email.trim();

    try {
      //Get user information
      const user = await UserService.getUser({
        email: email,
      });

      if (!user) return badRequest(res, `No user found.`, null);

      passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid)
        return unauthorized(res, `Invalid username/password`, null);

      const token = jwt.sign(
        { userId: user.id },
        `${process.env.TOKEN_SECRET}`,
        {
          expiresIn: "3d",
        }
      );
      return success(res, `Login Successful`, { token, user });
    } catch (error) {
      console.log(error);
      return badRequest(res, `${error.message}`, null);
    }
  }
}

module.exports = User;
