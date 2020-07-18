import {
    GET_CURRENCY,
    GET_CURRENCY_SUCCESS,
    GET_CURRENCY_FAILURE

} from '../ActionTypes'

const initialState = {
    instruments: [],
    loading: false,
    error: null
}

const currencyReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_CURRENCY:
            return {...state, loading: true}
            case GET_CURRENCY_SUCCESS:
                return {...state, loading: false, error: false, instruments: action.payload }
                case GET_CURRENCY_FAILURE:
                    return { ...state, loading: false, error: action.payload}
                    default:
                        return state
    }

}