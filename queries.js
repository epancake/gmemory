const database = require("./database-connection");

module.exports = {
  list() {
    return database("resolutions").select();
  },
  read(id) {
    return database('resolutions').where("id", id).first()
  },
  create(resolution) {
    return database('resolutions')
      .insert(resolution)
      .returning("*")
      .then(record => record[0])
  },
  update(id, resolution) {
    return database('resolutions').update(resolution)
      .where("id", id).returning("*").then(record => record[0])
  },
  delete(id) {
    return database('resolutions').delete().where("id", id)
  }
};

//* `update(id, resolution)` should return a promise that updates a resolution record matching `id` with the data in `resolution` and resolves to the updated database record as an object
//* `delete(id)` should return a promise that removes the record matching `id` and resolves to nothing
