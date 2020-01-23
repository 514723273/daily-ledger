import moment from 'moment';
import { SelectYearMonth, TimeLedgerStoreDispatch, TimeLedgerStoreState } from './store';
export interface HeaderProps {
  selectedDate: moment.Moment;
  selectYearMonth: SelectYearMonth;
}

export interface CalendarProps {
  selectedDate: moment.Moment;
}

export type TimeLedgerProps = TimeLedgerStoreState & TimeLedgerStoreDispatch;
