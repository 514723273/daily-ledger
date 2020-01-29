import moment from 'moment';
import { SelectYearMonth, TimeLedgerStoreDispatch, TimeLedgerStoreState } from './store';
import DailyEvent from './daily-event';
import EventType from './event-type';
export interface HeaderProps {
  selectedDate: moment.Moment;
  selectYearMonth: SelectYearMonth;
}

export interface CalendarProps {
  selectedDate: moment.Moment;
  monthEventList: ReadonlyArray<ReadonlyArray<DailyEvent>>;
}

export interface DailyEventProps {
  dailyEvent: DailyEvent;
}

export interface EllipsisButtonProps {
  dateEventList: ReadonlyArray<DailyEvent>;
  unfoldedEventTypeMap: Map<string, string>;
  showAll: boolean;
}

export type TimeLedgerProps = TimeLedgerStoreState & TimeLedgerStoreDispatch;
