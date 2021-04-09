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
          break;

        // Calculate area of rectangle
        case "RECTANGLE":
          const { length, breadth } = req.body.dimensions;

          if (!length || !breadth) return;

          if (!Number.isFinite(length) || !Number.isFinite(breadth)) return;

          total = length * breadth;
          data = {
            shape: shape,
            dimension: { length: length, breadth: breadth },
            result: total.toFixed(2),
          };

          await ShapeService.saveCalculation(data);

          console.log(res);
          break;

        // Calculate area of triangle
        case "TRIANGLE":
          const { length_a, length_b, length_c } = req.body.dimensions;

          if (!length_a || !length_a || !length_c) return;

          if (
            !Number.isFinite(length_a) ||
            !Number.isFinite(length_b) ||
            !Number.isFinite(length_c)
          )
            return;

          // calculate the semi-perimeter
          const s = (length_a + length_b + length_c) / 2;

          //calculate the area
          total = Math.sqrt(
            s * (s - length_a) * (s - length_b) * (s - length_c)
          );

          data = {
            shape: shape,
            dimension: {
              length_a: length_a,
              length_b: length_b,
              length_c: length_c,
            },
            result: total.toFixed(2),
          };

          await ShapeService.saveCalculation(data);
          console.log(res);
          break;

        // Calculate area of circle
        case "CIRCLE":
          const { radius } = req.body.dimensions;
          if (!radius) return;

          if (!Number.isFinite(radius)) return;

          total = Math.PI * (radius * radius);
          data = {
            shape: shape.toUpperCase(),
            dimension: {
              radius: radius,
            },
            result: total.toFixed(2),
          };

          await ShapeService.saveCalculation(data);
          console.log(res);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ShapeController;
