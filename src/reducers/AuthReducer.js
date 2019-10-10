import * as types from "../actions/ActionTypes"

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  token: null,
  errors: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      };

    case types.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user,
        token: action.token
      };

    case types.AUTHENTICATION_FAILURE:
      return {
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: {},
        token: null,
        errors: action.errors// || []
      };

    case types.LOGOUT:
      return {...state,
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: {},
        token: null
      };

    default:
      return state;
  }
}















// const initialState = {
//   token: localStorage.getItem('token'),
//   isAuthenticated: null,
//   isLoading: false,
//   user: null
// };

// export default function(state = initialState, action) {
//   switch(action.type) {
//     case USER_LOADING:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case USER_LOADED:
//       return {
//         ...state,
//         isAuthenticated: true,
//         isLoading: false,
//         user: action.payload
//       };
//     case LOGIN_SUCCESS: 
//     case REGISTER_SUCCESS: 
//       return {
//         ...state,
//         ...action.payload,
//         isAuthenticated: true,
//         isLoading: false
//       };
//     case AUTH_ERROR:
//     case LOGIN_FAIL:
//     case LOGOUT_SUCCESS:
//     case REGISTER_FAIL:
//       return {
//         ...state,
//         token: null,
//         user: null,
//         isAuthenticated: false,
//         isLoading: false
//       };
//     default:
//       return state;
//   }
// }