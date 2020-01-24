import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import TimeLedgerActionType from './action-types';
import { GetEventListAction } from '../types/store';

function* getEventList(action: GetEventListAction) {
  const { selectedDate } = action;
  const result = yield axios.get(`/data/${selectedDate.year()}/${selectedDate.month()}.json`);
  console.log(result);
}

export default function* saga() {
  yield takeLatest(TimeLedgerActionType.GET_EVENTS_LIST, getEventList);
}
