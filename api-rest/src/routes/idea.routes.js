const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("/", ParseIntMiddleware, IdeaController.getAll);
  router.get("/:ideaId", IdeaController.get);
  router.get("/:userId/all", IdeaController.getUserIdeas);
  router.post("/", AuthMiddleware, IdeaController.create);
  router.patch("/:ideaId", AuthMiddleware, IdeaController.update);
  router.delete("/:ideaId", AuthMiddleware, IdeaController.delete);
  router.post("/:ideaId/up-vote", AuthMiddleware, IdeaController.upVoteIdea);
  router.post(
    "/:ideaId/down-vote",
    AuthMiddleware,
    IdeaController.downVoteIdea
  );

  return router;
};
