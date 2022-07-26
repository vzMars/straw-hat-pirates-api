const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const strawHats = {
  luffy: {
    name: 'Monkey D. Luffy',
    occupation: 'Captain',
    epithet: ['Straw Hat'],
    bounty: 3000000000,
    origin: 'East Blue',
    age: 19,
    devilFruit: true,
    capabilities: [
      'Gomu Gomu no Mi',
      'Kenbunshoku Haki',
      'Busoshoku Haki',
      'Haoshoku Haki',
      'Voice of All Things',
      'Hand to Hand Combatant',
    ],
  },
  zoro: {
    name: 'Roronoa Zoro',
    occupation: 'Combatant',
    epithet: ['Pirate Hunter'],
    bounty: 320000000,
    origin: 'East Blue',
    age: 21,
    devilFruit: false,
    capabilities: [
      'Swordsmanship',
      'Kenbunshoku Haki',
      'Busoshoku Haki',
      'Haoshoku Haki',
    ],
  },
  nami: {
    name: 'Nami',
    occupation: 'Navigator',
    epithet: ['Cat Burglar'],
    bounty: 66000000,
    origin: 'East Blue',
    age: 20,
    devilFruit: false,
    capabilities: ['Cartographer', 'Art of Weather', 'Bo Staff Fighter'],
  },
  usopp: {
    name: 'Usopp',
    occupation: 'Sniper',
    epithet: ['Sogeking', 'God'],
    bounty: 200000000,
    origin: 'East Blue',
    age: 19,
    devilFruit: false,
    capabilities: ['Weapon Arsenal', 'Weapon Inventor', 'Kenbunshoku Haki'],
  },
  sanji: {
    name: 'Vinsmoke Sanji',
    occupation: 'Cook',
    epithet: ['Black Leg'],
    bounty: 330000000,
    origin: 'North Blue',
    age: 21,
    devilFruit: false,
    capabilities: [
      'Black Leg Style',
      'Kenbunshoku Haki',
      'Busoshoku Haki',
      'Modified Human',
      'Attack Cuisine',
    ],
  },
  chopper: {
    name: 'Tony Tony Chopper',
    occupation: 'Doctor',
    epithet: ['Cotton Candy Lover'],
    bounty: 100,
    origin: 'Grand Line',
    age: 17,
    devilFruit: true,
    capabilities: [
      'Hito Hito no Mi',
      'Drug, Medicine, and Virus Inventor',
      'Hand to Hand Combatant',
    ],
  },
  robin: {
    name: 'Nico Robin',
    occupation: 'Archaeologist',
    epithet: ['Devil Child'],
    bounty: 130000000,
    origin: 'West Blue',
    age: 30,
    devilFruit: true,
    capabilities: [
      'Hana Hana no Mi',
      'Fish-Man Karate',
      'Poneglyph reader',
      'Assassination',
    ],
  },
  franky: {
    name: 'Franky',
    occupation: 'Shipwright',
    epithet: ['Cyborg', 'Iron Man'],
    bounty: 94000000,
    origin: 'South Blue',
    age: 36,
    devilFruit: false,
    capabilities: [
      'Cyborg Modifications',
      'Ship and Vehicle Construction',
      'Battle Frankies Arsenal',
      'Boxing',
      'Laser Technology',
    ],
  },
  brook: {
    name: 'Brook',
    occupation: 'Musician',
    epithet: ['Humming', 'Soul-King'],
    bounty: 83000000,
    origin: 'West Blue',
    age: 90,
    devilFruit: true,
    capabilities: [
      'Soul Solid',
      'Yomi Yomi no Mi',
      'Music-based combat',
      'Skeletal body',
    ],
  },
  jinbe: {
    name: 'Jinbe',
    occupation: 'Helmsman',
    epithet: ['Knight of the Sea'],
    bounty: 438000000,
    origin: 'Grand Line',
    age: 46,
    devilFruit: false,
    capabilities: [
      'Fish-Man traits',
      'Fish-Man Karate',
      'Fish-Man Jujutsu',
      'Fish-Man Strength',
      'Busoshoku Haki',
      'Kenbunshoku Haki',
    ],
  },
  unknown: {
    name: 'unknown',
    occupation: 'unknown',
    epithet: ['unknown'],
    bounty: 0,
    origin: 'unknown',
    age: 0,
    devilFruit: false,
    capabilities: ['unknown'],
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  if (strawHats[name]) {
    res.json(strawHats[name]);
  } else {
    res.json(strawHats['unknown']);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
