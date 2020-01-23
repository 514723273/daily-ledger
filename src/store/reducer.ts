import { combineReducers } from 'redux';

import timeLedgerReducer from '../routes/time-ledger/store/reducer';

export default combineReducers({
  timeLedger: timeLedgerReducer
});
