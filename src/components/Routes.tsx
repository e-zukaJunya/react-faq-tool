import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import KbEdit from "./kbEdit/KbEdit";
import KbAdd from "./kbAdd/KbAdd";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/KbEdit" component={KbEdit} />
      <Route exact path="/kbAdd" component={KbAdd} />
      <Route>404のっとふぁうんど</Route>
    </Switch>
  );
};

export default Routes;
