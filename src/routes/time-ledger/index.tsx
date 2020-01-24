import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import Calendar from './components/calendar';
import Header from './components/header';
import { TimeLedgerStoreState, TimeLedgerStoreDispatch } from './types/store';
import StoreState from '../../store/type';
import * as actionCreators from './store/action-creators';
import { TimeLedgerProps } from './types/props';

function TimeLedger(props: TimeLedgerProps): JSX.Element {
  const { today, selectedDate } = props;
  const { selectYearMonth, getEventList } = props;

  useEffect(() => {
    getEventList(selectedDate);
  }, [getEventList, selectedDate]);

  return (
    <>
      <Header selectedDate={selectedDate} selectYearMonth={selectYearMonth} />
      <Calendar selectedDate={selectedDate} />
    </>
  );
}

const mapStateToProps = (state: StoreState): TimeLedgerStoreState => ({
  today: state.timeLedger.today,
  selectedDate: state.timeLedger.selectedDate
});

const mapDispatchToProps = (dispatch: Dispatch): TimeLedgerStoreDispatch => ({
  selectYearMonth: (date: moment.Moment) => dispatch(actionCreators.getSelectYearMonthAction(date)),
  getEventList: (date: moment.Moment) => dispatch(actionCreators.getGetEventList(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeLedger);
