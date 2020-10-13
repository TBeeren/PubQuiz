// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Create from "../Screens/Create/Create";
import ApproveTeams from "../Screens/ApproveTeams/ApproveTeams";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/approve-teams">
          <ApproveTeams></ApproveTeams>
        </Route>
        <Route path="/">
          <Create></Create>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
