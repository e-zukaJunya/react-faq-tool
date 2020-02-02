import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import KbEdit from "./kbEdit/KbEdit";
import KbAdd from "./kbAdd/KbAdd";
import Settings from "./settings/SettingsCont";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/KbEdit" component={KbEdit} />
      <Route exact path="/kbAdd" component={KbAdd} />
      <Route exact path="/settings" component={Settings} />
      {/* <Route>404のっとふぁうんど</Route> */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
