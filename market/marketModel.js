const db = require('../data/dbConfig.js')

module.exports = {
    findAll,
    findById,
    add,
    update,
    remove
}

function findAll(){
    return db('items as i')
    .select('i.*', 'u.name as owner')
    .join('users as u', 'i.users_id', '=', 'u.id')
}

function findById(id) {
    return db('items as i')
        .where({ id })
        .first()
}

function add(data){
    return db('items')
        .insert(data)
}

function update(changes, id){
    return db('items')
        .update(changes)
        .where({ id })
}

function remove(id){
    return db('items')
        .where({ id })
        .del()
}