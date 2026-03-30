<<<<<<< HEAD
const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 56,  "name": "Mankey",     "types": ["fighting"]},
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] },
    { "id": 150, "name": "Mewtwo",     "types": ["psychic"]}
]);


// 1
console.log(" # 1 ")

const divByThree = pokemon.filter(p => p.id % 3 === 0);

console.log(divByThree)

// 2
console.log(" # 2 ")

const fireType = pokemon.filter( p => p.types[0] === "fire");

console.log(fireType)

// 3
console.log(" # 3 ")

const multiType = pokemon.filter( p => p.types[0,1]);

console.log(multiType)


// 4
console.log(" # 4 ")

const names = pokemon.map(p => p.name );

console.log(names)

// 5
const greaterThanNinetyNine = pokemon.filter ( p => p.id > 99);

console.log(" # 5 ")


console.log(greaterThanNinetyNine)

// 6
console.log(" # 6 ")

const poisonType = pokemon.filter( p => p.types.length === 1 && p.types[0] === "poison");

console.log(poisonType)

// 7
console.log(" # 7 ")

const flyingType = pokemon.filter( p => p.types[1] === "flying");

console.log(flyingType)

// 8
console.log(" # 8 ")

const normalType = pokemon.filter( p => p.types[0] === "normal");
const countNormal = normalType.length;

console.log(normalType)
console.log(countNormal)

// 9
console.log(" # 9 ")

const notOneFortyEight = pokemon.filter ( p => p.id < 148);

console.log(notOneFortyEight)

// 10
console.log(" # 10 ")

const updatedPokemon = pokemon.map(p => {
    if (p.id === 35 && p.types == ("normal")) {
        p.types = ["fairy"];
    }
    return p;
});

console.log(updatedPokemon)

// 11
console.log ( " # 11 ")

const psychicType = pokemon.filter( p => p.types[0] === "psychic");

console.log(psychicType)
=======

>>>>>>> 9fb250651ee635e534ee96931a6a666fdebb871d
