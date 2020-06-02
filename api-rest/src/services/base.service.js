class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Id Must be Sent";

      throw error;
    }

    const currentEntity = await this.repository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "Entity was not Found";

      throw error;
    }

    return currentEntity;
  }

  getAll(pageSize, pageNumber) {
    return this.repository.getAll(pageSize, pageNumber);
  }

  create(entity) {
    return this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Id Must be Sent";

      throw error;
    }

    return this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Id Must be Sent";

      throw error;
    }

    return this.repository.delete(id, entity);
  }
}

module.exports = BaseService;
