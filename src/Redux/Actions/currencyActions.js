import { GET_CURRENCY,GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILURE } from "../ActionTypes";
import axios from '../../util/axios';
import CurrencyPair from "../../../components/CurrencyPair";

export const getCurrency = () =>{
    return{
    type: GET_CURRENCY,
   

    }
}
export const currencySuccess = data => {
    return{
    type: GET_CURRENCY_SUCCESS,
    payload: data
}}

export const currencyFailure = error => {
    return{
    type: GET_CURRENCY_FAILURE,
    payload: 
        error
    }
} 
export const fetchCurrency =() => {
      return async function(dispatch) {
 dispatch(getCurrency());
 try{
     const data = 
 await axios.get('/v3/instruments/EUR_USD/candles')

 dispatch (currencySuccess(data));

}
catch(error){
    return dispatch(currencyFailure(error.message))
}
}
}   
export default fetchCurrency
  
