import {put,select} from 'redux-saga/effects';
import * as selector from './selector';

export function* counterIncrementFn(){
    try{
        const count = yield select(selector.count);
        console.log(count)
     yield put({
         type:"INCREMENT"
     })
    }catch(e){
        console.log(e)
    }
}


export function* counterDecrementFn(){
    try{
     yield put({
         type:"DECREMENT"
     })
    }catch(e){
        console.log(e)
    }
}
