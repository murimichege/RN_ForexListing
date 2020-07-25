import { GET_CURRENCY,GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILURE } from "../ActionTypes";
import axios from 'axios'

export const getCurrency = () =>{
    return{
    type: GET_CURRENCY
    }
}
export const currencySuccess = instruments => {
    return{
    type: GET_CURRENCY_SUCCESS,
    payload: instruments
}}

export const currencyFailure = error => {
    return{
    type: GET_CURRENCY_FAILURE,
    payload: 
        error
    }
} 


 export const  fetchCurrency = () => {
    return  (dispatch) => {
        dispatch(getCurrency());

        axios
        .get("https://api-fxpractice.oanda.com/v3/accounts/101-004-14328428-002/instruments")
         // eslint-disable-next-line no-unused-vars
         .then(response => {
             // eslint-disable-next-line no-undef
             const instruments=response.data
             dispatch(currencySuccess(instruments))
         })

         .catch(error => {
             dispatch(currencyFailure(error.message))

         })

        }}


