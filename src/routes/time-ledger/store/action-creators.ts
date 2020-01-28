import TimeLedgerActionType from './action-types';
import {
  SelectYearMonthAction,
  GetMonthEventListAction,
  SetMonthEventListAction,
  AssembleMonthEventListAction
} from '../types/store';
import moment from 'moment';
import DailyEvent from '../types/daily-event';

export function getSelectYearMonthAction(date: moment.Moment): SelectYearMonthAction {
  return {
    type: TimeLedgerActionType.SELECT_YEAR_MONTH,
    selectedDate: date
  };
}

export function getGetMonthEventListAction(date: moment.Moment): GetMonthEventListAction {
  return {
    type: TimeLedgerActionType.GET_MONTH_EVENT_LIST,
    selectedDate: date
  };
}

export function getSetMonthEventListAction(
  monthEventList: ReadonlyArray<ReadonlyArray<DailyEvent>>
): SetMonthEventListAction {
  return {
    type: TimeLedgerActionType.SET_MONTH_EVENT_LIST,
    monthEventList
  };
}

export function getAssembleMonthEventListAction(
  monthEventList: ReadonlyArray<ReadonlyArray<DailyEvent>>
): AssembleMonthEventListAction {
  return {
    type: TimeLedgerActionType.ASSEMBLE_MONTH_EVENT_LIST,
    monthEventList
  };
}
