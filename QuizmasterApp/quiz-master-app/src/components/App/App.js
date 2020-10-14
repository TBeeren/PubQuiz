// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Create from "../Screens/Create/Create";
import ApproveTeams from "../Screens/ApproveTeams/ApproveTeams";
import ChooseCategory from "../Screens/ChooseCategory/ChooseCategory"
import Question from "../Screens/Question/Question"
import ChooseQuestion from "../Screens/ChooseQuestion/ChooseQuestion"

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/approve-teams" component={ApproveTeams}/>
        <Route exact path="/select-categories" component={ChooseCategory}/>
        <Route exact path="/question/:questionNumber" component={Question}/>
        <Route exact path="/choose-question" component={ChooseQuestion}/>
        <Route path="/" component={Create}/>
      </Switch>
    </Router>
  );
}

export default App;
