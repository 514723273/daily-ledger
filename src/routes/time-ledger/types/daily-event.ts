export default interface DailyEvent {
  readonly startOClock: string; // TODO moment.Moment
  readonly endOClock: string;
  readonly duration: number;
  readonly type: string;
  readonly detail: string;
  color: string;
}
