import { combineReducers } from "redux";

import counterReducer from '../components/counter/reducer';


const rootReducers = combineReducers({
    counter:counterReducer
})

export default rootReducers;