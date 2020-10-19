import React from 'react';
import './App.css';

import '../Screens/SignUp/SignUp'
import SignUp from '../Screens/SignUp/SignUp';
import Waiting from '../Screens/Waiting/Waiting';
import Question from '../Screens/Question/Question'
import Answer from '../Screens/Answer/Answer'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/answered" render={(routerProps) => <Answer history={routerProps.history} />} />
        <Route path="/question" render={()=> <Question />}/>
        <Route path="/waiting" render={(routerProps) => <Waiting history={routerProps.history}/>} />
        <Route path="/" render={(routerProps)=> <SignUp history={routerProps.history}/>}/>
      </Switch>
    </div>
  );
}

export default App;
