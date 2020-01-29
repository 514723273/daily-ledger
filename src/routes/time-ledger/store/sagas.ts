import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import TimeLedgerActionType from './action-types';
import { GetMonthEventListAction, AssembleMonthEventListAction } from '../types/store';
import * as actionCreators from './action-creators';
import EventType from '../types/event-type';

function mapSubTypeToColor(eventTypeList: ReadonlyArray<EventType>): Map<string, string> {
  const typeToColorMap = new Map<string, string>();

  for (const eventType of eventTypeList) {
    if (eventType.subTypeList == null) {
      continue;
    }
    for (const eventSubType of eventType.subTypeList) {
      typeToColorMap.set(eventSubType.type, eventSubType.color);
    }
  }

  return typeToColorMap;
}

function* getMonthEventList(action: GetMonthEventListAction) {
  const { selectedDate } = action;
  const url = `/data/${selectedDate.year()}/${selectedDate.month()}.json`;
  try {
    const result = yield axios.get(url);
    yield put(actionCreators.getAssembleMonthEventListAction(result.data));
  } catch (e) {
    console.log(`${url} 网络请求失败`);
  }
}

function* assembleMonthEventList(action: AssembleMonthEventListAction) {
  const { monthEventList } = action;
  const result = yield axios.get(`/data/event-type-list.json`);

  const typeToColorMap: Map<string, string> = mapSubTypeToColor(result.data);

  for (let dateEventList of monthEventList) {
    for (let event of dateEventList) {
      const color = typeToColorMap.get(event.type);
      if (color == null) {
        throw Error(`“${event.type}”类型未被记录`);
      }
      event.color = color;
    }
  }
  yield put(actionCreators.getSetMonthEventListAction(monthEventList));
}

export default function* saga() {
  yield takeLatest(TimeLedgerActionType.GET_MONTH_EVENT_LIST, getMonthEventList);
  yield takeLatest(TimeLedgerActionType.ASSEMBLE_MONTH_EVENT_LIST, assembleMonthEventList);
}
