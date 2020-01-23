import * as constants from '../store/constants';
import moment from 'moment';

/************** constants ********************/
export type SELECT_YEAR_MONTH_TYPE = typeof constants.SELECT_YEAR_MONTH;

/************** actions ********************/
export interface Action {
  type: SELECT_YEAR_MONTH_TYPE;
}

export interface SelectYearMonthAction extends Action {
  type: SELECT_YEAR_MONTH_TYPE;
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
export interface TimeLedgerStoreDispatch {
  selectYearMonth: SelectYearMonth;
}
