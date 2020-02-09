import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import KbAdd from "./kbAdd/KbAdd";
import KbApply from "./kbApply/KbApplyCont";
import KbEdit from "./kbEdit/KbEdit";
import Settings from "./settings/SettingsCont";

// optimize import shift alt o
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/KbEdit" component={KbEdit} />
      <Route exact path="/kbAdd" component={KbAdd} />
      <Route exact path="/kbApply" component={KbApply} />
      <Route exact path="/settings" component={Settings} />
      {/* <Route>404のっとふぁうんど</Route> */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
