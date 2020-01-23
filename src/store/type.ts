import { TimeLedgerStoreState } from '../routes/time-ledger/types/store';

export default interface StoreState {
  readonly timeLedger: TimeLedgerStoreState;
}
