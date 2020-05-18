import counterReducer from './counterReducer';
import changeReducer from './changeReducer';
import visibility from './visibility';
import {combineReducers} from 'redux';


const allReducers= combineReducers({
    counter:counterReducer,changeReducer,visibility});
    

export default allReducers;