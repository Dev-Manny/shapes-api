const database = require("../src/models");

class ShapeService {
  static async saveCalculation(data) {
    console.log(data);
    try {
      return await database.Shape.create(data);
    } catch (error) {
      // TODO:: Handle error
      throw error;
    }
  }

  static async getUserResults(id) {
    try {
      return await database.Shape.findAll({
        where: { user_id: id },
      });
    } catch (error) {
      // TODO:: Handle error
      throw error;
    }
  }
}
module.exports = ShapeService;
