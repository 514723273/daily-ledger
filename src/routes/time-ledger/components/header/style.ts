import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 64px;
  border-bottom: #dadce0 1px solid;
  padding: 8px;
`;

export const ChangeMonthButtonGroup = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  color: #5f6368;

  & button {
    border: none;
    background: transparent;
  }
`;

export const DisplayedDateSpan = styled.span`
  margin-left: 58px;
  color: #3c4043;
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  white-space: nowrap;
`;
