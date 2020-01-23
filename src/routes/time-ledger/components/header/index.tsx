import React from 'react';
import { HeaderWrapper, ChangeMonthButtonGroup, DisplayedDateSpan } from './style';
import { HeaderProps } from '../../types/props';

export default function(props: HeaderProps) {
  const { selectedDate } = props;
  const { selectYearMonth } = props;
  return (
    <HeaderWrapper>
      <ChangeMonthButtonGroup>
        <button
          className="icon iconfont"
          onClick={() => {
            selectYearMonth(selectedDate.clone().subtract(1, 'month'));
          }}
        >
          &#xe64f;
        </button>
        <button
          className="icon iconfont"
          onClick={() => {
            selectYearMonth(selectedDate.clone().add(1, 'month'));
          }}
        >
          &#xe655;
        </button>
      </ChangeMonthButtonGroup>

      <DisplayedDateSpan>
        {`${selectedDate.year()}年${selectedDate.month() + 1}月`}
      </DisplayedDateSpan>
    </HeaderWrapper>
  );
}
