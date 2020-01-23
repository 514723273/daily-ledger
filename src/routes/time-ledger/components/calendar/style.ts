import styled from 'styled-components';

const TABLE_HEIGHT = 1000;
const COL_COUNT = 7;
const ROW_COUNT = 6;

export const TableWrapper = styled.table`
  width: 100%;
  height: ${TABLE_HEIGHT}px;
  & tr {
    display: flex;
  }
`;

export const TableHeadWrapper = styled.thead`
  height: 20px;

  & tr th {
    display: block;
    width: calc(100% / ${COL_COUNT});
    color: #70757a;
    font-size: 11px;
    font-weight: bold;
    line-height: 30px;
  }
`;

export const TableBodyWrapper = styled.tbody`
  height: 500px;
  & tr td {
    display: block;
    width: calc(100% / ${COL_COUNT});
    height: ${TABLE_HEIGHT / ROW_COUNT}px;
    border-left: #dadce0 1px solid;
    border-bottom: #dadce0 1px solid;

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
