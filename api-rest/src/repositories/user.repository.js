const BaseRepository = require("./base.repository");
let _user = null;

//const UserModel = require()

class UserRepository extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  getUserByUserName(username) {
    return _user.findOne({ username });
  }
}

module.exports = UserRepository;
