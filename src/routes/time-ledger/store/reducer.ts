import moment from 'moment';
import * as constants from './constants';
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
    case constants.SELECT_YEAR_MONTH:
      return {
        ...state,
        selectedDate: (action as SelectYearMonthAction).selectedDate
      };
    default:
      return state;
  }
};
