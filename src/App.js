import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Notfound from "./components/notfound/Notfound";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/welcome/:sharnetta" component={Welcome} />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome name={props.match.params.name} />}
        />
        <Route exact="/jeopardy" component={Jeopardy} />
        <Route component={Notfound} />
      </Switch>
    </div>
  );
}

export default App;
