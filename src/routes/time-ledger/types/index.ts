export interface Statistic {
  type: string;
  duration: number;
}

export interface Diary {
  date: string;
  title?: string;
  statisticList: Array<Statistic>;
  tableList?: Array<{ type: string; textList: Array<string> }>;
}
