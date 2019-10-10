import * as types from './ActionTypes'

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user, 
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

//LOGIN
export const authenticate = (loginCredentials) => {
  return dispatch => {
    dispatch(authRequest()) //AUTHENTICATION_REQUEST
    return fetch('http://localhost:3000/user_token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ auth: loginCredentials })
    })
    .then(response => response.json())
    .then(data => {
      const token = data.jwt;
      localStorage.setItem('token', token);

      return getUser(loginCredentials)
    })
    .then(user => {
      console.log(user)
      dispatch(authSuccess(user, localStorage.token))
    })
    .catch(errors => {
      dispatch(authFailure(errors))
      localStorage.clear()
    })
  }
}

export const getUser = (credentials) => {
  const request = new Request('http://localhost:3000/find_user', {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: credentials})
  })
  return fetch(request)
  .then(response => response.json())
  .then(userJson => {return userJson})
  .catch(error => {
    return error;
  });
}
