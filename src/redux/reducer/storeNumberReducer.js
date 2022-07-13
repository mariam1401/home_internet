import {REQUEST_STATUSES} from "../../utilis/constant";
import {STORE_NUMBER_ERROR, STORE_NUMBER_REQUEST, STORE_NUMBER_SUCCESS} from "../type/types";



const initialState={
    status:'initial',
    data:[],
    error:'',
}
const storeNumberReducer =(state= initialState,action) =>{

    switch (action.type){
        case STORE_NUMBER_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: '',data:[]}
        case STORE_NUMBER_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: ''}
        case STORE_NUMBER_ERROR:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload}
    }
    return state
}
export { storeNumberReducer}