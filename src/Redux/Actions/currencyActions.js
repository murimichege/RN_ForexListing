import { GET_CURRENCY,GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILURE } from "../ActionTypes";

export const getCurrency = () =>{
    type: GET_CURRENCY
}
export const currencySuccess = json => {
    type: GET_CURRENCY_SUCCESS
    payload: json
}

export const currencyFailure = error => {
    type: GET_CURRENCY_FAILURE
    payload: 
        error
    

} 


 function fetchCurrency(){
    return  async dispatch => {
        dispatch(getCurrency());
    try{
        const response = await fetch('https://api-fxpractice.oanda.com/v3/accounts/101-004-14328428-002/pricing?instruments=EUR_USD%2CUSD_CAD%2CGBP_AUD')
        const json = response.json();
        dispatch(currencySuccess(json.instruments))
    

    }
    catch(error) {
        dispatch(currencyFailure(error))}
    
    };
};
export default fetchCurrency;

