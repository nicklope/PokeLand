const express = require('express')
const cors = require('cors')
const pokemonController = require('./controller/PokemonController')
const db = require('./db')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

//controller routes go here
// app.get('/', (request, response) => {
//   response.send({ msg: 'Server Running' })
// })
app.get('/section', pokemonController.getSectionDetails)
app.get('/', pokemonController.getPokemonDetails)
app.post('/mission/statement', pokemonController.createPokemonDetails)
app.get('/poke/card/:name', pokemonController.findPokemon)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
