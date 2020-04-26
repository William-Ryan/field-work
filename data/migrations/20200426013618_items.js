exports.up = function(knex) {
    return knex.schema.createTable('items', items => {
      items.increments();
  
      items
        .string('name', 100)
        .notNullable();

      items
        .string('price', 100)
        .notNullable()

      items
        .string('category', 100)
        .notNullable();

      items
        .string('location', 100)
        .notNullable();

      items.integer('users_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('items')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('items');
  };
  