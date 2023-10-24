const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
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
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
    console.log("---1---")
    const threePoke = pokemon.filter((poke) => {
        if (poke.id % 3 == 0)
            return poke.name
    })
    console.log(threePoke)

    console.log("---2---") // .includes() built in... before it was: poke.types[0] == "fire" and it worked because no second fire type
    const firePoke = pokemon.filter((poke) => {
        return poke.types.includes("fire");
    })
    console.log(firePoke)

    console.log("---3---")
    const twoPoke = pokemon.filter((poke) => {
        return poke.types[1]
    })
    console.log(twoPoke)

    console.log("---4---")
    const namePoke = pokemon.map((poke) => {
        return poke.name;
    })
    console.log(namePoke)

    console.log("---5---")
    const idPoke = pokemon.filter((poke) => {
        return poke.id > 99;
    }) .map ((poke) => {
        return `${poke.name}'s id is ${poke.id} > 99`
    })
    console.log(idPoke)

    console.log("---6---")
    const poisonPoke = pokemon.filter((poke) => {
        return poke.types == "poison";
    }) .map ((poke) => {
        return `${poke.name}'s only type is ${poke.types}`
    })
    console.log(poisonPoke)

    console.log("---7---")
    const flyingPoke = pokemon.filter((poke) => {
        return poke.types[1] == "flying";
    }) .map( poke => {
        return `${poke.name}'s second type is ${poke.types[1]} and it's first type is ${poke.types[0]}`
    })
    console.log(flyingPoke)

    console.log("---8---")
    const normalPoke = pokemon.filter((poke) => {
        if (poke.types == "normal")
            return poke.name
    }) .map((poke, i) => {
        return `The only normal type pokemon are ${i+1} - ${poke.name}`
    })
    console.log(normalPoke)