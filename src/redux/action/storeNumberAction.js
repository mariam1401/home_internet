import {STORE_NUMBER_REQUEST, STORE_NUMBER_SUCCESS} from "../type/types";

export const storeNumberRequest = (data)=> {
    return {
        type: STORE_NUMBER_REQUEST,
        payload: data
    }
}
export const storeNumberSuccess = (data)=> {
        return {
            type: STORE_NUMBER_SUCCESS,
            payload: data
        }
}
export const storeNumberFail = (err)=> {
    return {
        type: STORE_NUMBER_REQUEST,
        payload: err
    }
}