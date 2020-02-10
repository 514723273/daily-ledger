import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

// types
import { Dispatch } from 'redux';
import StoreState from '../../store/type';
import { TimeLedgerStoreState, TimeLedgerStoreDispatch } from './types/store';
import { TimeLedgerProps } from './types/props';

function TimeLedger(props: TimeLedgerProps): JSX.Element {
  const { diaryList } = props;
  console.log(diaryList);
  return <Button>hello world!</Button>;
}

const mapStateToProps = (state: StoreState): TimeLedgerStoreState => ({
  diaryList: state.timeLedger.diaryList
});

const mapDispatchToProps = (dispatch: Dispatch): TimeLedgerStoreDispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TimeLedger);
