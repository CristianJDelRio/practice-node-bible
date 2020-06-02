const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");
const { CacheTime } = require("../helpers");
module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:userId", UserController.get);
  router.get(
    "/",
    [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CacheTime.ONE_HOUR)],
    UserController.getAll
  );
  router.patch("/:userId", AuthMiddleware, UserController.update);
  router.delete("/:userId", AuthMiddleware, UserController.delete);

  return router;
};
