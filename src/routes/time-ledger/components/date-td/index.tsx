import React from 'react';
import moment from 'moment';
import DailyEvent from '../../types/daily-event';
import { DailyEventItemWrapper, TypeCircle } from './style';

export interface DateTDProps {
  aDay: moment.Moment;
  selectedDate: moment.Moment;
  dateEventList: ReadonlyArray<DailyEvent>;
}

export default function DateTD(props: DateTDProps): JSX.Element {
  const { aDay, selectedDate, dateEventList } = props;
  return (
    <td>
      {/** 日期头部 */}
      <div
        className={`${
          aDay.month() === selectedDate.month() ? 'date-header this-month' : 'date-header'
        }`}
      >
        {aDay.date() === 1 ? `${aDay.month() + 1}月${aDay.date()}日` : aDay.date()}
      </div>
      {/** 当月的当天的事件列表 */}
      {aDay.month() === selectedDate.month() && dateEventList
        ? dateEventList
            .filter((dailyEvent: DailyEvent) => dailyEvent.detail !== '')
            .sort(
              (dailyEvent1: DailyEvent, dailyEvent2: DailyEvent) =>
                dailyEvent2.duration - dailyEvent1.duration
            )
            .map((dailyEvent: DailyEvent, index: number) => (
              <DailyEventItemWrapper key={index}>
                <TypeCircle color={dailyEvent.color} />
                {dailyEvent.duration.toFixed(1)}h {dailyEvent.type} {dailyEvent.detail}
              </DailyEventItemWrapper>
            ))
        : null}
    </td>
  );
}
