import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Notfound from "./components/notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome name={props.match.params.name} />}
        />
        <Route component={Notfound} />
      </Switch>
    </div>
  );
}

export default App;
