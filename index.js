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

server.listen(5000, () => {
    console.log('listening on 5000');

  });