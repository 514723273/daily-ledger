// types
import TimeLedgerActionType from '../store/action-types';
import { Diary } from '../types';

export interface Action {
  type: TimeLedgerActionType;
}

export interface TimeLedgerStoreState {
  diaryList: ReadonlyArray<Diary>;
}

export interface TimeLedgerStoreDispatch {}
