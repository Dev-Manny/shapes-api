const express = require("express");
const app = express();
const shapeRoutes = require("./server/routes/ShapeRoutes");

app.use(express.json());

const port = process.env.PORT || 8000;
app.use("/api/v1/calculate/", shapeRoutes);

app.listen(port, console.log(`Server started on ${port}`));
