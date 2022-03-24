const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(logger('dev'))
app.use('/api', routes)
app.use(cors())
app.use(express.urlencoded({ extended: false }))

//routes go here
app.get('/', (request, response) => {
  response.send({ msg: 'Server Running' })
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
