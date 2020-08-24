import { GET_CURRENCY,GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILURE } from "../ActionTypes";
import axios from '../../util/axios';


  

 
export const getCurrency = () =>{
    return{
    type: GET_CURRENCY,
    payload: {
        loading: true
    }

    }
}
export const currencySuccess = instruments => {
    return{
    type: GET_CURRENCY_SUCCESS,
    payload: {instruments}
}}

export const currencyFailure = error => {
    return{
    type: GET_CURRENCY_FAILURE,
    payload: 
        {error}
    }
} 
export const fetchCurrency =() => {
      return dispatch => {
 dispatch(getCurrency());


 axios.get("/v3/instruments/EUR_USD/candles?price=M")
 .then(response => {
     dispatch(currencySuccess(response.data));

 })
        .catch (error => {
            const err = error

            dispatch(currencyFailure(err))
         })
    
  }
}  
export default fetchCurrency
  
