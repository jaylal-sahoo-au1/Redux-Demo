import { takeLatest } from "@redux-saga/core/effects";

import * as counterAction from '../components/counter/action';

export function* rootActions(){
    yield takeLatest('INCREMENT_ACTION', counterAction.counterIncrementFn);
    yield takeLatest('DECREMENT_ACTION', counterAction.counterDecrementFn);
}