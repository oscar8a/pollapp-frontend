import uuid from 'uuid'

// const updateOnePokemon = (pokemon, id, updateToMake) => {
//   return pokemon.map(pokemon => {
//     if (pokemon.id === id) {
//       // change the weight
//       return {
//         ...pokemon,
//         ...updateToMake
//       }
//     } else {
//       return pokemon
//     }
//   })
// }


const pollReducer = function(state = [], action){
  console.log(state)
  console.log(action) 
  console.log("poll reducer reporting for duty")

  switch(action.type) {
    case "FILL_POLLS":
      return {
        polls: action.polls
      }
    // case "ADD_POKEMON": 
    //   return [ ...state, { id: uuid(), ...action.pokemon } ]
    // case "UPDATE_POKEMON_WEIGHT":
    //   return updateOnePokemon(state.pokemon, action.id, { weight: action.weight })
    default: 
      return state
  }
}


export default pollReducer