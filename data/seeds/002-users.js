exports.seed = function(knex) {

  return knex('users').insert([
    { username: 'Gman', password: 'Gman', name: 'Greg' }
  ])
};