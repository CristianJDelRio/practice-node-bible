const { createContainer, asClass, asValue, asFunction } = require("awilix");
const { User, Comment, Idea } = require("../models");
const Routes = require("../routes");
const config = require("../config");
const app = require("./");

const {
  UserRepository,
  CommentRepository,
  IdeaRepository,
} = require("../repositories");
const {
  HomeRoutes,
  CommentRoutes,
  IdeaRoutes,
  UserRoutes,
  AuthRoutes,
} = require("../routes/index.routes");

const {
  HomeService,
  CommentService,
  UserService,
  IdeaService,
  AuthService,
} = require("../services");
const {
  HomeController,
  UserController,
  CommentController,
  IdeaController,
  AuthController,
} = require("../controllers");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    CommentService: asClass(CommentService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
  })
  .register({
    Idea: asValue(Idea),
    User: asValue(User),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
  });

module.exports = container;
