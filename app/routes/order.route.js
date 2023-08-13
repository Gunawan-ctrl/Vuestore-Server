module.exports = (app) => {
  const Orders = require("../controllers/order.controller");
  const router = require("express").Router();

  router.get("/user/:id", Orders.findOrder);
  router.post("/user/:id/add", Orders.addToCart);
  router.delete("/user/:id/product/:product", Orders.removeFromCart);

  app.use("/api/orders", router);
};
