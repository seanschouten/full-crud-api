// Require packages
const express = require('express')
const cors = require('cors')

// Require controller
const ctrl = require('./controller')
const users = require('./data')

// Create server index
const app = express()

// Top level middleware to parse JSON to JS
app.use(express.json())
app.use(cors())

// endpoints
app.get('/users', ctrl.getUsers)
app.get('/user/:id', ctrl.getUserByParam)
app.get('/user', ctrl.getUserByQuery)
app.post('/user', ctrl.createNewUser)
app.put('/users/:id', ctrl.updateUser)
app.delete('/users/:id', ctrl.deleteUser)

// Get server listening
const port = 8080
app.listen(port, () => console.log(`Serving on ${port}`))