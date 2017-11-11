import { combineReducers } from 'redux';
import Events_Reducer from './Events_Reducer'
import User_Reducer from './User_Reducer'

export default combineReducers({
	Events: Events_Reducer,
	User: User_Reducer,
})
