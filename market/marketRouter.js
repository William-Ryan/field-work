const express = require('express');

const Item = require('./marketModel.js')
const User = require('../users/users-model.js')

const router = express.Router()

router.get('/items', (req, res) => {
    
    Item.findAll()
    .then(item => {
        res.status(200).json(item)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving Items' })
    })
})

router.get('/items/:id', (req, res) => {
    const { id } = req.params;

    Item.findById(id)
    .then(item => {
        if(item.id >= 0){
            return res.status(200).json(item)
        } else {
            return res.status(404).json({ message: 'Error id invalid' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving Item' })
    })
})

router.post('/items', (req, res) => {
    const data = req.body;

    Item.add(data)
    .then(item => {
        res.status(201).json(item)
    })
    .catch(() => {
        res.status(500).json({ message: 'Failed to Create Item'})
    })
})

router.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Item.findById(id)
    .then(item => {
        if (item){
            Item.update(changes, id)
            .then(updatedItem => {
                res.status(200).json(updatedItem)
            });
        } else {
            res.status(404).json({ message: 'Could not find specified item'})
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error updating item' })
    })
})

router.delete('/items/:id', (req, res) => {
    const { id } = req.params;

    Item.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(200).json({ message: 'Item Removed From Market' })
        } else {
            res.status(404).json({ message: 'Could not find specified item' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error deleting Item' })
    })
})

router.get('/users', (req, res) => {

    User.findAll()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving Items' })
    })
})

router.get('/users/:id', (req, res) => {
    id = req.params.id

    User.findById(id)
    .then(user => {
        if(user.id > 0){
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ message: 'Error id invalid' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving User' })
    })
})

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    User.findById(id)
    .then(user => {
        if (user){
            User.update(changes, id)
            .then(updatedUser => {
                res.status(200).json(updatedUser)
            });
        } else {
            res.status(404).json({ message: 'Could not find specified user'})
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error updating user' })
    })
})

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    User.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(200).json({ message: 'User Removed' })
        } else {
            res.status(404).json({ message: 'Could not find specified user' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error deleting User' })
    })
})

module.exports = router