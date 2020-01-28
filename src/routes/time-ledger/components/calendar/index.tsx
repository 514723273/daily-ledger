import React from 'react';
import moment from 'moment';
import { TableWrapper, TableHeadWrapper, TableBodyWrapper } from './style';
import DateTD from '../date-td';
import { WEEK_NAME_LIST, CALENDAR_COL, CALENDAR_ROW } from '../../constants';
import { CalendarProps } from '../../types/props';

function getDisplayWeeks(selectedDate: moment.Moment): moment.Moment[][] {
  const firstDayOfMonth: moment.Moment = selectedDate.startOf('month'); //  每月1号
  const firstDayWeekDay: number = firstDayOfMonth.isoWeekday(); // 1号 星期
  let cursor: moment.Moment = firstDayOfMonth.clone().subtract(firstDayWeekDay, 'day'); // 日历起始日期-1
  const weeks: moment.Moment[][] = []; // 6*7 日历
  for (let i = 0; i < CALENDAR_ROW; i++) {
    const aWeek: moment.Moment[] = [];
    for (let j = 0; j < CALENDAR_COL; j++) {
      const aDay: moment.Moment = cursor.clone().add(1, 'day');
      aWeek.push(aDay);
      cursor = aDay;
    }
    weeks.push(aWeek);
  }
  return weeks;
}

export default function(props: CalendarProps) {
  const { selectedDate, monthEventList } = props;

  const weeks = getDisplayWeeks(selectedDate);
  return (
    <TableWrapper>
      <TableHeadWrapper>
        <tr>
          {WEEK_NAME_LIST.map((day: string) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </TableHeadWrapper>
      <TableBodyWrapper>
        {weeks.map((aWeek: moment.Moment[], index: number) => (
          <tr key={index}>
            {aWeek.map((aDay: moment.Moment) => (
              <DateTD
                key={aDay.dayOfYear()}
                aDay={aDay}
                selectedDate={selectedDate}
                dateEventList={monthEventList[aDay.date() - 1]}
              />
            ))}
          </tr>
        ))}
      </TableBodyWrapper>
    </TableWrapper>
  );
}
