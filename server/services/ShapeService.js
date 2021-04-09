const database = require("../src/models");

class ShapeService {
  static async saveCalculation(data) {
    try {
      return await database.Shape.create(data);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ShapeService;
