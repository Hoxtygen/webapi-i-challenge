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
        .catch(err => {
            res.status(500).json({
                status: 500,
                error: "The users information could not be retrieved."
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
                    message: "The user with the specified ID does not exist."
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
                error: "The user information could not be retrieved."
            })
        })
});

server.post('/api/users', (req, res) => {
    let { name, bio} = req.body;
    const newUser = { name, bio }
    if (!name || !bio) {
        return res.status(400).json({
            status: 400,
            errorMessage: "Please provide name and bio for the user." 
        })
    }
    UsersModel.insert(newUser)
        .then(user => {
           return res.status(201).json({
               status: 200,
               user
           })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                error: "There was an error while saving the user to the database" 
            })
        })
});

server.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
        UsersModel.remove(id)
            .then(user => {
               if (!user) {
                return res.status(404).json({
                    status: 400,
                    message: "The user with the specified ID does not exist." 
                })
               }
               return res.status(200).json({
                status: 200,
                message: 'Delete operation successful'
            })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    error: "The user could not be removed" 
                })
            })
});

server.listen(5000, () => {
    console.log('listening on 5000');

  });