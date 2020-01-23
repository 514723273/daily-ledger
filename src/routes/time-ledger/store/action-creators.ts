import * as constants from './constants';
import { SelectYearMonthAction } from '../types/store';
import moment from 'moment';

export function getSelectYearMonthAction(date: moment.Moment): SelectYearMonthAction {
  return {
    type: constants.SELECT_YEAR_MONTH,
    selectedDate: date
  };
}
