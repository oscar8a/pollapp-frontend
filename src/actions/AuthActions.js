import * as types from './ActionTypes'

//this function has an authentication request action type
const authRequest = () => {
  console.log("performing authRequest action")
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}
//this function has an authentication success action type. When there's a success in correct credentials, the server passes a user and token.
const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}
//this function has an authentication failure action type. When there are incorrect credentials, the server passes errors.
const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const signup = (user) => {
  const newUser = user
  console.log(newUser)

  return dispatch => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user})
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(authenticate({
          username: newUser.username,
          email: newUser.email,
          password: newUser.password})
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = (credentials) => {
  console.log("YOU ARE IN AUTHENTICATE NOW")
  console.log(credentials)
  return dispatch => {
    dispatch(authRequest())
    return fetch("http://localhost:3000/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })
    })
    .then(res => res.json())
    .then((response) => {
      console.log(response)
        localStorage.token = response.token
        localStorage.userId = response.user_id
    })
    
  
    
    // fetch(`${API_URL}/user_token`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({auth: credentials})
    // })



      // .then((user) => {
      //   console.log(user)
      //     dispatch(authSuccess(user, localStorage.token))
      // })
      // .catch((errors) => {
      //     dispatch(authFailure(errors))
      //     localStorage.clear()
      // })
  }
}



// loginUser = (token, userId) => {
//   localStorage.token = token
//   localStorage.userId = userId
//   this.setState({
//     token: token,
//     loggedInUserId: userId
//   })
// }

// export const getUser = (credentials) => {
//   const request = new Request(`${API_URL}/find_user`, {
//     method: "POST",
//     headers: new Headers({
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.token}`,
//     }),
//     body: JSON.stringify({user: credentials})
//   })
//   return fetch(request)
//     .then(response => response.json())
//     .then(userJson => {return userJson})
//     .catch(error => {
//       return error;
//     });
// }