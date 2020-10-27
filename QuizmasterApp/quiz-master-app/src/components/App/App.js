// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Create from "../Screens/Create/Create";
import ApproveTeams from "../Screens/ApproveTeams/ApproveTeams";
import ChooseCategory from "../Screens/ChooseCategory/ChooseCategory"
import Question from "../Screens/Question/Question"
import ChooseQuestion from "../Screens/ChooseQuestion/ChooseQuestion"
import FinalizeScreen from "../Screens/FinalizeScreen/FinalizeScreen"
import VictoryScreen from "../Screens/VictoryScreen/VictoryScreen"

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/approve-teams" render={() => <ApproveTeams/>}/>
        <Route exact path="/select-categories" render={() => <ChooseCategory/>}/>
        <Route exact path="/select-question" render={() => <ChooseQuestion/>}/>
        <Route exact path="/question/:questionNumber" render={() => <Question/>}/>
        <Route exact path="/finalize" render={() => <FinalizeScreen/>}/>
        <Route exact path="/victory" render={() => <VictoryScreen/>}/>
        <Route path="/" render={(routeProps) => <Create history={routeProps.history}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
