module.exports = (app) => {
  const Products = require("../controllers/product.controller");

  const router = require("express").Router();

  router.get("/", Products.findAll);
  router.get("/:id", Products.findOne);

  app.use("/api/products", router);
};
