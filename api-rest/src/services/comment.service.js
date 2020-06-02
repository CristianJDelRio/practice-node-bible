const BaseService = require("./base.service");
let _commentRepository = null,
  _ideaRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _ideaRepository = IdeaRepository;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId Must be Sent";

      throw error;
    }

    const idea = _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea Does Not Exist";

      throw error;
    }

    return idea.comments;
  }

  async createComment(comment, ideaId, userId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId Must be Sent";

      throw error;
    }

    const idea = await _ideaRepository.create(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea Does Not Exist";

      throw error;
    }

    const createdComment = await _commentRepository.create({
      ...comment,
      author: userId,
    });
    idea.comments.push(createdComment);

    return _ideaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
