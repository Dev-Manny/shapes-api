const database = require("../src/models");

class UserService {
  static async signUp(data) {
    try {
      return await database.User.create(data);
    } catch (error) {
      // TODO:: Handle error
      throw error;
    }
  }

  static async getUser(email) {
    try {
      return await database.User.findOne({
        where: email,
      });
    } catch (error) {
      // TODO:: Handle error
      throw error;
    }
  }
}
module.exports = UserService;
