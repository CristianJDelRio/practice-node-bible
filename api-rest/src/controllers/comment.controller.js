let _commentService = null;

class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async get(req, res) {
    const { commentId } = req.params;
    const comment = await _commentService.get(commentId);
    return res.send(comment);
  }

  async update(req, res) {
    const { body, params } = req;
    const { commentId } = params;
    const updatedComment = await _commentService.update(commentId, body);

    return res.send(updatedComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deletedComment = await _commentService.delete(commentId);
    return res.send(deletedComment);
  }

  async getIdeaComments(req, res) {
    const { ideaId } = req.params;
    const comments = await _commentService.getIdeaComments(ideaId);
    return res.send(comments);
  }

  async createComment(req, res) {
    const { body, params } = req;
    const { ideaId } = params;
    const { id: userId } = req.user;

    const createdComment = await _commentService.create(body, ideaId, userId);
    return res.status(201).send(createdComment);
  }
}

module.exports = CommentController;
