import TimeLedgerActionType from '../store/action-types';
import moment from 'moment';

/************** actions ********************/
export interface Action {
  type: TimeLedgerActionType;
}

export interface SelectYearMonthAction extends Action {
  readonly selectedDate: moment.Moment;
}

export interface GetEventListAction extends Action {
  readonly selectedDate: moment.Moment;
}

/************** state ********************/
export interface TimeLedgerStoreState {
  readonly today: moment.Moment;
  readonly selectedDate: moment.Moment;
}

/************** dispatch ********************/
export interface SelectYearMonth {
  (date: moment.Moment): void;
}

export interface GetEventList {
  (date: moment.Moment): void;
}

export interface TimeLedgerStoreDispatch {
  selectYearMonth: SelectYearMonth;
  getEventList: GetEventList;
}
