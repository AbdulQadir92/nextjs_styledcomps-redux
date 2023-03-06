import { combineReducers } from 'redux'
import authReducers from './reducers/authReducers'
import albumReducers from './reducers/albumReducers'

export default combineReducers({
    auth: authReducers,
    albums: albumReducers
})