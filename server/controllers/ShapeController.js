const ShapeService = require("../services/ShapeService");

class ShapeController {
  static async calculateShape(req, res) {
    let total;
    let data;

    try {
      if (!req.body.shape) return;

      if (!req.body.dimensions) return;

      const shape = req.body.shape.trim().toUpperCase();

      switch (shape) {
        // Calculates area of square
        case "SQUARE":
          const { sideA, sideB } = req.body.dimensions;

          if (!sideA || !sideB) return;

          if (!Number.isFinite(sideA) || !Number.isFinite(sideB)) return;

          total = sideA * sideB;

          data = {
            shape: shape,
            dimension: { sideA: sideA, sideB: sideB },
            result: total.toFixed(2),
          };

          await ShapeService.saveCalculation(data);
          console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ShapeController;