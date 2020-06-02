const BaseService = require("./base.service");
let _ideaRepository = null;

class IdeaService extends BaseService {
  constructor({ IdeaRepository }) {
    super(IdeaRepository);
    _ideaRepository = IdeaRepository;
  }

  getUserIdea(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "userId Must be Sent";

      throw error;
    }

    return _ideaRepository.getUserIdea(author);
  }

  async upVoteIdea(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId Must be Sent";

      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea Does Not Exist";

      throw error;
    }

    idea.upVotes.push(true);
    return _ideaRepository.update(ideaId, { upVotes: idea.upVotes });
  }

  async downVoteIdea(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId Must be Sent";

      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea Does Not Exist";

      throw error;
    }

    idea.downVotes.push(true);
    return _ideaRepository.update(ideaId, { downVotes: idea.downVotes });
  }
}

module.exports = IdeaService;
