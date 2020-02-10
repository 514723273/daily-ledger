// types
import { Action, TimeLedgerStoreState } from '../types/store';
import { Diary, Statistic } from '../types';

const typeList: Array<string> = ['晚睡', '午睡', '瞎折腾', '练字', '运动', '前端', '电影'];
const diaryList: Array<Diary> = [];
for (let i = 0; i < 10; i++) {
  const statisticList: Array<Statistic> = [];
  for (let type of typeList) {
    statisticList.push({
      type,
      duration: Math.floor(Math.random() * 6)
    });
  }
  diaryList.push({
    date: `2020-01-${10 + Math.floor(Math.random() * 20)}`,
    statisticList
  });
}

const defaultState: TimeLedgerStoreState = {
  diaryList
};

export default (
  state: TimeLedgerStoreState = defaultState,
  action: Action
): TimeLedgerStoreState => {
  switch (action.type) {
    default:
      return state;
  }
};
