const express = require('express')
const cors = require("cors")
const logger = require("morgan")

const app = express()

const indexRouter = require("./routers/index")
const apiRouter = require("./routers/api")
const {connect} = require("./db/db")


app.use(logger("dev"))
app.use(express.json())
app.use(cors())


//http://localhost:3000/api
app.use('/', indexRouter)
app.use('/api',apiRouter)

connect()

module.exports = app

