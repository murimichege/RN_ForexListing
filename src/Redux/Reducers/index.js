import {  combineReducers } from "redux";
import reducer from './currencyReducer'
const reducers = combineReducers({
currenciesreducer: reducer
})

export default reducers