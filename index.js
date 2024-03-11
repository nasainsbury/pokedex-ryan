const pokemons = require('./pokedex.json');
const calculateBmi = (weight, height) => {
    return (weight / (height ** 2)).toFixed(2)
    
}


for (let i = 0; i < pokemons.length; i++){
    const pokemon = pokemons[i];

    let hp = pokemon?.base?.HP || 'N/A'
    // console log the pokemon's height in cm
    // "1 m" -> 100
    // "100 m" -> 10000

    // y = My name is Nathan
    // y.replace("name", "")
    // replace x.replace()
    let weight = Number(pokemon.profile.weight.replace("kg", ""))
    let height = Number(pokemon.profile.height.replace("m", ""))
    console.log(pokemon.name.english, calculateBmi(weight, height))

    // console.log(pokemon.name.english, hp);
}

