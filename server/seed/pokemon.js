const db = require('../db')
const Pokemon = require('../models/Pokemon')
// const axios = require('axios')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const pokemon = [
    {
      name: 'Charizard',
      section: 'Flying',
      overview:
        "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
      image: 'https://www.serebii.net/blackwhite/pokemon/006.png'
    },
    {
      name: 'Pidgeot',
      section: 'Flying',
      overview:
        'By flapping its wings with all its might, Pidgeot can make a gust of wind capable of bending tall trees.',
      image: 'https://www.serebii.net/blackwhite/pokemon/018.png'
    },
    {
      name: 'Articuno',
      section: 'Flying',
      overview:
        'A legendary bird Pokémon. It can create blizzards by freezing moisture in the air.',
      image: 'https://www.serebii.net/blackwhite/pokemon/144.png'
    },
    {
      name: 'Zapdos',
      section: 'Flying',
      overview:
        'A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.',
      image: 'https://www.serebii.net/blackwhite/pokemon/145.png'
    },
    {
      name: 'Moltres',
      section: 'Flying',
      overview:
        'One of the legendary bird Pokémon. It is said that its appearance indicates the coming of spring.',
      image: 'https://www.serebii.net/blackwhite/pokemon/146.png'
    },
    {
      name: 'Blastoise',
      section: 'Water',
      overview: '',
      image: 'https://www.serebii.net/blackwhite/pokemon/009.png'
    },
    {
      name: 'Gyrados',
      section: 'Water',
      overview:
        'Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.',
      image: 'https://www.serebii.net/blackwhite/pokemon/130.png'
    },
    {
      name: 'Dewgong',
      section: 'Water',
      overview:
        'Its streamlined body has low resistance, and it swims around cold oceans at a speed of eight knots.',
      image: 'https://www.serebii.net/blackwhite/pokemon/087.png'
    },
    {
      name: 'Lapras',
      section: 'Water',
      overview:
        'Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.',
      image: 'https://www.serebii.net/Shiny/BW/131.png'
    },
    {
      name: 'Seaking',
      section: 'Water',
      overview:
        'In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.',
      image: 'https://www.serebii.net/blackwhite/pokemon/119.png'
    },
    {
      name: 'Ghastly',
      section: 'Ghost',
      overview:
        'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
      image: 'https://www.serebii.net/blackwhite/pokemon/092.png'
    },
    {
      name: 'Haunter',
      section: 'Ghost',
      overview:
        'It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.',
      image: 'https://www.serebii.net/blackwhite/pokemon/093.png'
    },
    {
      name: 'Gengar',
      section: 'Ghost',
      overview:
        'The leer that floats in darkness belongs to a Gengar delighting in casting curses on people.',
      image: 'https://www.serebii.net/blackwhite/pokemon/094.png'
    },
    {
      name: 'Drifloon',
      section: 'Ghost',
      overview:
        'These Pokémon are called the "Signpost for Wandering Spirits." Children holding them sometimes vanish.',
      image: 'https://www.serebii.net/blackwhite/pokemon/425.png'
    },
    {
      name: 'Drifblim',
      section: 'Ghost',
      overview:
        'They carry people and Pokémon, but the wind can catch them, so there cant be a fixed destination.',
      image: 'https://www.serebii.net/blackwhite/pokemon/426.png'
    },
    {
      name: 'Charmander',
      section: 'Fire',
      overview:
        'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.',
      image: 'https://www.serebii.net/Shiny/BW/004.png'
    },
    {
      name: 'Arcanine',
      section: 'Fire',
      overview:
        'The sight of it running over 6,200 miles in a single day and night has captivated many people.',
      image: 'https://www.serebii.net/blackwhite/pokemon/059.png'
    },
    {
      name: 'Ninetales',
      section: 'Fire',
      overview:
        'Each of its nine tails is imbued with a supernatural power, and it can live for a thousand years.',
      image: 'https://www.serebii.net/Shiny/BW/038.png'
    },
    {
      name: 'Magmar',
      section: 'Fire',
      overview:
        'The scorching fire exhaled by Magmar forms heat waves around its body, making it hard to see the Pokémon clearly.',
      image: 'https://www.serebii.net/blackwhite/pokemon/126.png'
    },
    {
      name: 'Rapidash',
      section: 'Fire',
      overview:
        'When at an all-out gallop, its blazing mane sparkles, enhancing its beautiful appearance.',
      image: 'https://www.serebii.net/blackwhite/pokemon/078.png'
    },
    {
      name: 'Kangaskhan',
      section: 'Ranch',
      overview:
        'It raises its offspring in its belly pouch. It lets the baby out to play only when it feels safe.',
      image: 'https://www.serebii.net/blackwhite/pokemon/115.png'
    },
    {
      name: 'Snorlax',
      section: 'Ranch',
      overview:
        'When its belly is full, it becomes too lethargic to even lift a finger, so it is safe to bounce on its belly.',
      image: 'https://www.serebii.net/blackwhite/pokemon/143.png'
    },
    {
      name: 'Tauros',
      section: 'Ranch',
      overview:
        'Once it takes aim at its foe, it makes a headlong charge. It is famous for its violent nature.',
      image: 'https://www.serebii.net/blackwhite/pokemon/128.png'
    },
    {
      name: 'Chansey',
      section: 'Ranch',
      overview:
        'A kindly Pokémon that lays highly nutritious eggs and shares them with injured Pokémon or people.',
      image: 'https://www.serebii.net/blackwhite/pokemon/113.png'
    },
    {
      name: 'Lickitung',
      section: 'Ranch',
      overview:
        'Being licked by its long, saliva-covered tongue leaves a tingling sensation. Extending its tongue retracts its tail.',
      image: 'https://www.serebii.net/blackwhite/pokemon/108.png'
    },
    {
      name: 'Bulbasaur',
      section: 'Forest',
      overview:
        'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
      image: 'https://www.serebii.net/blackwhite/pokemon/001.png'
    },
    {
      name: 'Exeggutor',
      section: 'Forest',
      overview:
        'It is called “The Walking Jungle." If a head grows too big, it falls off and becomes an Exeggcute.',
      image: 'https://www.serebii.net/blackwhite/pokemon/103.png'
    },
    {
      name: 'Parasect',
      section: 'Forest',
      overview:
        'A mushroom grown larger than the hosts body controls Parasect. It scatters poisonous spores.',
      image: 'https://www.serebii.net/blackwhite/pokemon/047.png'
    },
    {
      name: 'Victreebel',
      section: 'Forest',
      overview:
        'It pools in its mouth a fluid with a honeylike scent, which is really an acid that dissolves anything.',
      image: 'https://www.serebii.net/blackwhite/pokemon/071.png'
    },
    {
      name: 'Tangela',
      section: 'Forest',
      overview:
        '	Many writhing vines cover it, so its true identity remains unknown. The blue vines grow its whole life long.',
      image: 'https://www.serebii.net/blackwhite/pokemon/114.png'
    }
  ]

  await Pokemon.insertMany(pokemon)
  console.log('Pokemon incoming!')
}
const run = async () => {
  await main()
  db.close()
}
run()
