import { GET_CURRENCY,GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILURE } from "../ActionTypes";

export const getCurrency = () =>{
    type: GET_CURRENCY
}
export const currencySuccess = currency => {
    type: GET_CURRENCY_SUCCESS
    payload: {currency}
}

export const currencyFailure = error => {
    type: GET_CURRENCY_FAILURE
    payload: {
        error
    }

} 


 function fetchCurrency(){
    return dispatch => {
        dispatch(getCurrency())
    
    return fetch('https://api-fxpractice.oanda.com/v3/accounts/pricing?instruments'),
    {
        'method' : 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Host': 'api-fxpractice.oanda.com',
            'API-KEY': '101-004-14328428-002'
        }, 
        'params': {
            'instruments' : 'EUR_USD%2CUSD_CAD%2CGBP_AUD%2CGBP_USD%2CGBP_JPY%2CGBP_CAD%2CGBP_CHF%2CUSD_JPY%2CAUD_USD%2CAUD_JPY%2CEUR_AUD%2CGBP_NZD%2CEUR_JPY'
        }


    }

    .then(res => res.json)
    .then(res =>{
        if(res.error){
            throw(res.error)
        }
        dispatch(currencySuccess(res.instruments))
    })
    .catch(error => {
        dispatch(currencyFailure(error))
    })
}}

export default fetchCurrency;

