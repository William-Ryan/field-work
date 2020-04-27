const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findAll,
  findBy,
  findById,
  update,
  remove
}

function findAll(){
  return db('users')
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('users')
      .update(changes)
      .where({ id })
}

function remove(id){
  return db('users')
      .where({ id })
      .del()
}
