import moment from 'moment';
import TimeLedgerActionType from './action-types';
import {
  TimeLedgerStoreState,
  Action,
  SelectYearMonthAction,
  SetMonthEventListAction
} from '../types/store';

const today: moment.Moment = moment();
const defaultState: TimeLedgerStoreState = {
  today,
  selectedDate: today,
  monthEventList: []
};

export default (
  state: TimeLedgerStoreState = defaultState,
  action: Action
): TimeLedgerStoreState => {
  switch (action.type) {
    case TimeLedgerActionType.SELECT_YEAR_MONTH:
      return {
        ...state,
        selectedDate: (action as SelectYearMonthAction).selectedDate
      };
    case TimeLedgerActionType.SET_MONTH_EVENT_LIST:
      return {
        ...state,
        monthEventList: (action as SetMonthEventListAction).monthEventList
      };
    default:
      return state;
  }
};
