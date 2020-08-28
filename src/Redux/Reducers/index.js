import {  combineReducers } from 'redux';
import currencyReducer from './currencyReducer'
const reducers = combineReducers({
currencyReducer: currencyReducer
})

export default reducers