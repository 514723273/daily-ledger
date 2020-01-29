import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import Calendar from './components/calendar';
import Header from './components/header';
import { TimeLedgerStoreState, TimeLedgerStoreDispatch } from './types/store';
import StoreState from '../../store/type';
import * as actionCreators from './store/action-creators';
import { TimeLedgerProps } from './types/props';

function TimeLedger(props: TimeLedgerProps): JSX.Element {
  const { today, selectedDate, monthEventList } = props;
  const { selectYearMonth, getMonthEventList } = props;

  useEffect(() => {
    getMonthEventList(selectedDate);
  }, [getMonthEventList, selectedDate]);

  return (
    <>
      <Header selectedDate={selectedDate} selectYearMonth={selectYearMonth} />
      <Calendar selectedDate={selectedDate} monthEventList={monthEventList} />
    </>
  );
}

const mapStateToProps = (state: StoreState): TimeLedgerStoreState => ({
  today: state.timeLedger.today,
  selectedDate: state.timeLedger.selectedDate,
  monthEventList: state.timeLedger.monthEventList
});

const mapDispatchToProps = (dispatch: Dispatch): TimeLedgerStoreDispatch => ({
  selectYearMonth: (date: moment.Moment) => dispatch(actionCreators.getSelectYearMonthAction(date)),
  getMonthEventList: (date: moment.Moment) =>
    dispatch(actionCreators.getGetMonthEventListAction(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeLedger);
