// implement your API here
const express = require('express');
const server = express();

const UsersModel = require('./data/db.js');

server.use(express.json())
server.get('/', (req, res) => {
    res.send('Hello, this is the lambda users api')
})

server.get('/api/users', (req, res) => {
    UsersModel.find()
        .then(users => {
            res.status(200).json({
                status: 200,
                users
            })
        })
})

server.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    UsersModel.findById(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: 'User not found'
                })
            }
            return res.status(200).json({
                status: 200,
                user
            })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                message: err
            })
        })
})

server.listen(5000, () => {
    console.log('listening on 5000');

  });