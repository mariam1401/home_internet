import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import reducer from './reducer/index'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
const sagaMiddleware=createSagaMiddleware();
const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;