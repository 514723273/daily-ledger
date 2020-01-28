import React from 'react';
import { EllipsisButtonWrapper, AllDisplayModal } from './style';
import { EllipsisButtonProps } from '../../types/props';
import { EVENT_NUM_LIMIT } from '../../constants';
import DailyEvent from '../../types/daily-event';

export default function EllipsisButton(props: EllipsisButtonProps) {
  // const { dateEventList, unfoldedEventTypeMap, showAll } = props;
  // return (
  //   <EllipsisButtonWrapper>
  //     还有 {dateEventList.length - EVENT_NUM_LIMIT} 项
  //     <AllDisplayModal showAll={showAll}>
  //       {dateEventList.map((dailyEvent: DailyEvent, index: number) => (
  //         <DailyEventItem eventColor={dailyEvent.getColor()} dailyEvent={dailyEvent} key={index} />
  //       ))}
  //     </AllDisplayModal>
  //   </EllipsisButtonWrapper>
  // );
}
