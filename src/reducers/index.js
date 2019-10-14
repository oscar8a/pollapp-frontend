import { combineReducers } from 'redux'
import pollReducer from './Reducer'
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
  poll: pollReducer,
  auth: AuthReducer
})

export default rootReducer;