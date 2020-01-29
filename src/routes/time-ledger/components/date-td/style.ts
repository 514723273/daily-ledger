import styled from 'styled-components';

export const DailyEventItemWrapper = styled.div`
  width: 100%;
  height: 18px;
  margin-bottom: 1px;
  margin-right: 5px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  color: #3c4043;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

export const TypeCircle = styled.span`
  display: inline-block;
  margin-right: 6px;
  border-radius: 8px;
  border: 4px solid;
  border-color: ${(props: { color: string }) => props.color};
`;
