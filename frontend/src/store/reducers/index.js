import { combineReducers } from 'redux'
import { ipInfoReducer } from './ipInfoReducer'


export const rootReducer = combineReducers({
    ip_info: ipInfoReducer,
})
