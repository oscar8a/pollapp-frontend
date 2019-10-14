import * as types from './ActionTypes'

const setMyPolls = mypolls => {
  return {
    type: types.GET_MY_POLLS,
    mypolls
  }
}

export const getUserPolls = (user) => {
  return (dispatch) => {
    console.log("I NEED USER ID")

    console.log(user.id)
    return fetch(`http://localhost:3000/users/${localStorage.userId}`, {
      headers: {
        "Authorization": user.token
      }
    })
    .then(res => res.json())
    .then(mypolls => {
      dispatch(setMyPolls(mypolls))
    }) //should return collection of polls user created
    .catch(error => console.log(error));
  };
}