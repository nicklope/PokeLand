const db = require('../db')
const Pokemon = require('../models/Pokemon')
const Section = require('../models/Section')

// console.log(Section)
// console.log(Pokemon)
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
      name: 'Fearow',
      section: 'Flying',
      overview:
        'It has the stamina to fly all day on its broad wings. It fights by using its sharp beak.',
      image: 'https://www.serebii.net/blackwhite/pokemon/022.png'
    },
    {
      name: 'Blastoise',
      section: 'Water',
      overview:
        'The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.',
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
      name: 'Poliwag',
      section: 'Water',
      overview:
        'Its skin is so thin, its internal organs are visible. It has trouble walking on its newly grown feet.',
      image: 'https://www.serebii.net/blackwhite/pokemon/060.png'
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
      name: 'Murkrow',
      section: 'Ghost',
      overview:
        'If spotted, it will lure an unwary person into chasing it, then lose the pursuer on mountain trails.',
      image: 'https://www.serebii.net/blackwhite/pokemon/198.png'
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
      image: 'https://www.serebii.net/blackwhite/pokemon/218.png'
    },
    {
      name: 'Slugma',
      section: 'Fire',
      overview:
        'Its body is made of magma. If it doesnt keep moving, its body will cool and harden.',
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
      name: 'Flaffy',
      section: 'Ranch',
      overview:
        'Its fluffy coat swells to double when static electricity builds up. Touching it can be shocking.',
      image: 'https://www.serebii.net/blackwhite/pokemon/179.png'
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
    },
    {
      name: 'Tangrowth',
      section: 'Forest',
      overview:
        '	Its arms are made of plants that bind themselves to things. They grow back right away if cut.',
      image: 'https://www.serebii.net/Shiny/BW/465.png'
    }
  ]

  const section = [
    {
      sectionName: 'Flying',
      image:
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/06/760771.jpg?q=50&fit=contain&w=943&h=496&dpr=1.5'
    },
    {
      sectionName: 'Water',
      image: 'https://wallpaperaccess.com/full/118488.jpg'
    },
    {
      sectionName: 'Forest',
      image: 'https://www.1999.co.jp/itbig59/10592095.jpg'
    },
    {
      sectionName: 'Fire',
      image:
        'https://pm1.narvii.com/7115/ed037afd6a9c1c8c93e4bf8048e34603fe02ed11r1-1024-671v2_hq.jpg'
    },
    {
      sectionName: 'Ghost',
      image:
        'https://i.pinimg.com/originals/9d/8e/c2/9d8ec2fbccd833b699cefcb214450a9a.jpg'
    },
    {
      sectionName: 'Ranch',
      image:
        'https://cdn.donmai.us/sample/7c/6a/__whitney_and_miltank_pokemon_and_2_more_drawn_by_nazgul_5511474__sample-7c6abd5f5c0e5954d6846b1d43f02897.jpg'
    }
  ]

  await Pokemon.insertMany(pokemon)
  await Section.insertMany(section)
  console.log('Pokemon incoming!')
}
const run = async () => {
  await main()
  db.close()
}
run()
