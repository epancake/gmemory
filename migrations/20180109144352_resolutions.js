exports.up = function(knex, Promise) {
  return knex.schema.createTable("resolutions", table => {
    table.increments("id").primary();
    table.date("dueDate");
    table.text("resolution");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("resolutions");
};
