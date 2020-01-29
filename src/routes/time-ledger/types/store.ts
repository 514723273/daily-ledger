import TimeLedgerActionType from '../store/action-types';
import moment from 'moment';
import DailyEvent from './daily-event';
import EventType from './event-type';

/************** actions ********************/
export interface Action {
  type: TimeLedgerActionType;
}

export interface SelectYearMonthAction extends Action {
  readonly selectedDate: moment.Moment;
}

export interface GetMonthEventListAction extends Action {
  readonly selectedDate: moment.Moment;
}

export interface SetMonthEventListAction extends Action {
  readonly monthEventList: ReadonlyArray<ReadonlyArray<DailyEvent>>;
}

export interface AssembleMonthEventListAction extends Action {
  readonly monthEventList: ReadonlyArray<ReadonlyArray<DailyEvent>>;
}

/************** state ********************/
export interface TimeLedgerStoreState {
  readonly today: moment.Moment;
  readonly selectedDate: moment.Moment;
  readonly monthEventList: ReadonlyArray<ReadonlyArray<DailyEvent>>;
}

/************** dispatch ********************/
export interface SelectYearMonth {
  (date: moment.Moment): void;
}

export interface GetMonthEventList {
  (date: moment.Moment): void;
}

export interface TimeLedgerStoreDispatch {
  selectYearMonth: SelectYearMonth;
  getMonthEventList: GetMonthEventList;
}
