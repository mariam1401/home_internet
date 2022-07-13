import { all} from "redux-saga/effects";
import watcherSagaNumberStore from "./saga/storeNumber";



export default function* rootSaga() {
    yield all([
        watcherSagaNumberStore()
    ]);
}
