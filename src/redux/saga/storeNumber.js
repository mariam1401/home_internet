import {call,put,takeLatest,all} from "redux-saga/effects";
import {storeNumberSuccess,storeNumberFail} from "../action/storeNumberAction";
import {STORE_NUMBER_REQUEST} from "../type/types";


export function* storeNumber({payload}) {
    try {
        if(payload % 2 === 0){
            yield put(storeNumberSuccess(true))
        }
        else{
            yield put(storeNumberSuccess(false))
        }
    }
    catch (err){
       yield  put(storeNumberFail('error'))
    }
}
export default function* storesSagas() {
    yield all([
        takeLatest(STORE_NUMBER_REQUEST, storeNumber),
    ]);
}