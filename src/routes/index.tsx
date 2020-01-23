import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import TimeLedger from './time-ledger';

export default () => (
  <Switch>
    <Route path="/" render={() => <Redirect to="/time-ledger" />} exact key="home" />
    <Route path="/time-ledger" component={TimeLedger} exact key="time-ledger" />
  </Switch>
);
