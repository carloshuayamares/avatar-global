
const debug = require('debug')('debug:index')
const express = require("express");
const cors = require("cors");

const cookieParser = require('cookie-parser')
const errors = require('restify-errors')

// Load Configuration
const config = require('./config')

// Server Configuration
const server = express()
const NODE_PORT = 8000


server.use(cookieParser())
server.use(express.query({ arrayLimit: 4000 }))
server.use(express.json({ limit: '50mb' })) // application/json
server.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 })) // application/x-www-form-urlencoded
server.use(cors(config.CORS_OPTIONS))


// Routes Definitions
const routes = require('./routes')

server.get("/message", (req, res) => {
  res.json({ message: "Hello from server 2!" });
});

server.use('/', routes.CheckInRoutes)


// Not Found
server.use((req, res, next) => next(new errors.NotFoundError('Endpoint Not Found')))

// Server Initialization
server.listen(NODE_PORT, () => {
  debug(`Server Listening on PORT: ${NODE_PORT}`)
})
