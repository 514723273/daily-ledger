import TimeLedgerActionType from './action-types';
import { SelectYearMonthAction, GetEventListAction } from '../types/store';
import moment from 'moment';

export function getSelectYearMonthAction(date: moment.Moment): SelectYearMonthAction {
  return {
    type: TimeLedgerActionType.SELECT_YEAR_MONTH,
    selectedDate: date
  };
}

export function getGetEventList(date: moment.Moment): GetEventListAction {
  return {
    type: TimeLedgerActionType.GET_EVENTS_LIST,
    selectedDate: date
  };
}
