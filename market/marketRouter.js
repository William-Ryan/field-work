const restricted = require('../auth/restricted-middleware.js')
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

router.get('/user/:id', (req, res) => {
    id = req.params.id

    User.findById(id)
    .then(item => {
        if(item.id > 0){
            return res.status(200).json(item)
        } else {
            return res.status(404).json({ message: 'Error id invalid' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving User' })
    })
})

router.get('/user/:id/items', (req, res) => {
    id = req.params.id 

    User.findById(id)
    .then(item => {
        res.status(200).json()
    })
})

module.exports = router