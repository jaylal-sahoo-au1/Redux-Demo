import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import rootReducers from './rootReducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;


