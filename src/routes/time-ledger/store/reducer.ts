import moment from 'moment';
import TimeLedgerActionType from './action-types';
import { TimeLedgerStoreState, Action, SelectYearMonthAction } from '../types/store';

const today: moment.Moment = moment();
const defaultState: TimeLedgerStoreState = {
  today,
  selectedDate: today
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
    default:
      return state;
  }
};
