import {call,put,takeLatest,all} from "redux-saga/effects";
import {storeNumberSuccess,storeNumberFail} from "../action/storeNumberAction";
import {STORE_NUMBER_REQUEST} from "../type/types";
import axios from "axios";


export function* storeNumber({payload}) {
    try {
        // debugger;
        const response =  yield call(axios.get, `https://9y77tbxz14.execute-api.us-east-1.amazonaws.com/dev/v1/devrefactory/eligible/${payload}`);
        yield put(storeNumberSuccess(response));
    } catch (error) {
        yield put(storeNumberFail(error.message));
    }
}
export default function* storesSagas() {
    yield all([
        takeLatest(STORE_NUMBER_REQUEST, storeNumber),
    ]);
}