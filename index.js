const express = require("express");
const app = express();
var cors = require("cors");
const shapeRoutes = require("./server/routes/ShapeRoutes");
const userRoutes = require("./server/routes/UserRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(express.json());

const port = process.env.PORT || 8000;
app.use("/api/v1/calculate/", shapeRoutes);
app.use("/api/v1/user/", userRoutes);
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// when a random route is inputed
app.get("*", (req, res) =>
  res.status(404).send({
    message: "You are not allowed to visit here",
  })
);

app.post("*", (req, res) =>
  res.status(404).send({
    message: "You are not allowed to visit here",
  })
);

app.listen(port, console.log(`Server started on ${port}`));
