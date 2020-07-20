import {applyMiddleware, compose, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import currencyReducer from './Reducers/currencyReducer'
const rootReducer = combineReducers({
    currencyReducer 
})
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store