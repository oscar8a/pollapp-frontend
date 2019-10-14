import * as types from '../actions/ActionTypes'

const initialState = {
  allPolls: [],
  myPolls: []
}

export default (state = initialState, action) => {
  console.log("poll reducer...")
  console.log('this is state', state)
  console.log('this is action', action) 

  switch(action.type) {
    case types.FILL_POLLS:
      return {
        polls: action.polls
      }
    case types.GET_MY_POLLS:
      return {
        mypolls: action.mypolls
      }
    // case "ADD_POKEMON": 
    //   return [ ...state, { id: uuid(), ...action.pokemon } ]
    // case "UPDATE_POKEMON_WEIGHT":
    //   return updateOnePokemon(state.pokemon, action.id, { weight: action.weight })
    default: 
      return state
  }

}


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


// export const pollReducer = function(state = [], action){
//   console.log("poll reducer...")
//   console.log('this is state', state)
//   console.log('this is action', action) 

//   switch(action.type) {
//     case types.FILL_POLLS:
//       return {
//         polls: action.polls
//       }
//     case types.GET_MY_POLLS:
//       return {
//         mypolls: action.mypolls
//       }
    // case "ADD_POKEMON": 
    //   return [ ...state, { id: uuid(), ...action.pokemon } ]
    // case "UPDATE_POKEMON_WEIGHT":
    //   return updateOnePokemon(state.pokemon, action.id, { weight: action.weight })
  //   default: 
  //     return state
  // }
// }
// export default pollReducer