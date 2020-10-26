import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignIn from './components/Screens/SignIn/SignIn';
import Intermission from './components/Screens/Intermission/Intermission';
import QuestionOngoing from './components/Screens/QuestionOngoing/QuestionOngoing'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/question" render={() => <QuestionOngoing /> } />
        <Route path="/intermission" render={() => <Intermission />} />
        <Route path="/" render={(routerProps) => <SignIn history={routerProps.history} />} />
      </Switch>
    </div>
  );
}

export default App;
