import styled from 'styled-components';

const ITEM_WIDTH = 260;
const ITEM_HEIGHT = 200;

export const TableWrapper = styled.table`
  width: 100%;
  & tr {
    display: flex;
  }
`;

export const TableHeadWrapper = styled.thead`
  height: 20px;

  & tr th {
    display: block;
    width: ${ITEM_WIDTH}px;
    color: #70757a;
    font-size: 11px;
    font-weight: bold;
    line-height: 30px;
  }
`;

export const TableBodyWrapper = styled.tbody`
  & tr td {
    position: relative;
    display: block;
    box-sizing: border-box;
    width: ${ITEM_WIDTH}px;
    /* height: ${ITEM_HEIGHT}px; */
    border-left: #dadce0 1px solid;
    border-bottom: #dadce0 1px solid;
    padding: 0 4px;

    .date-header {
      text-align: center;
      color: #70757a;
      font-size: 12px;
      font-weight: bold;
      line-height: 30px;
    }
    .this-month {
      color: #3c4043;
    }
  }
`;
