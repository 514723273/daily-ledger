import React from 'react';
import moment from 'moment';
import { TableWrapper, TableHeadWrapper, TableBodyWrapper } from './style';

function getDisplayWeeks(selectedDate: moment.Moment): moment.Moment[][] {
  const firstDayOfMonth: moment.Moment = selectedDate.startOf('month'); //  每月1号
  const firstDayWeekDay: number = firstDayOfMonth.isoWeekday(); // 1号 星期
  let cursor: moment.Moment = firstDayOfMonth.clone().subtract(firstDayWeekDay, 'day'); // 日历起始日期-1
  const weeks: moment.Moment[][] = []; // 6*7 日历
  for (let i = 0; i < 6; i++) {
    const aWeek: moment.Moment[] = [];
    for (let j = 0; j < 7; j++) {
      const aDay: moment.Moment = cursor.clone().add(1, 'day');
      aWeek.push(aDay);
      cursor = aDay;
    }
    weeks.push(aWeek);
  }
  return weeks;
}

export default function() {
  const selectedDate = moment();
  const weeks = getDisplayWeeks(selectedDate);
  return (
    <TableWrapper>
      <TableHeadWrapper>
        <tr>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
          <th>周日</th>
        </tr>
      </TableHeadWrapper>
      <TableBodyWrapper>
        {weeks.map((aWeek: moment.Moment[], index: number) => (
          <tr key={index}>
            {aWeek.map((aDay: moment.Moment) => (
              <td key={aDay.dayOfYear()}>
                <div
                  className={`${
                    aDay.month() === selectedDate.month() ? 'date-header this-month' : 'date-header'
                  }`}
                >
                  {aDay.date() === 1 ? `${aDay.month() + 1}月${aDay.date()}日` : aDay.date()}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </TableBodyWrapper>
    </TableWrapper>
  );
}
