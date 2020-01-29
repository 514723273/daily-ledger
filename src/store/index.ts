import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import timeLedgerSagas from '../routes/time-ledger/store/sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(timeLedgerSagas);
