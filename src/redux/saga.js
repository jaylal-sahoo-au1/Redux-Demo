import { all, fork } from 'redux-saga/effects';
import { rootActions } from './rootActions';

export default function* sagas() {
    yield all([fork(rootActions)]);
}
