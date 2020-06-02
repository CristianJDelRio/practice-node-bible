class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  get(id) {
    return this.model.findById(id);
  }

  getAll(pageSize = 5, pageNumber = 1) {
    const skip = pageSize * (pageNumber - 1);
    return this.model.find().skip(skip).limit(pageSize);
  }

  create(entity) {
    return this.model.create(entity);
  }

  update(id, entity) {
    return this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    await this.model.findByIdAndDelete();
    return true;
  }
}

module.exports = BaseRepository;
