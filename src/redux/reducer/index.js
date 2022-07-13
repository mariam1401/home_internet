import { combineReducers } from 'redux';
import {storeNumberReducer} from './storeNumberReducer'

const rootReducer = combineReducers({
    storeNumber:storeNumberReducer
});
export default rootReducer