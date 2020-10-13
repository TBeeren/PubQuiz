import React from 'react';
import './App.css';

import '../Screens/SignUp/SignUp'
import SignUp from '../Screens/SignUp/SignUp';
import Waiting from '../Screens/Waiting/Waiting';
import Question from '../Screens/Question/Question'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" render={()=> <Question />}/>
        <Route path="/waiting" render={() => <Waiting />} />
        <Route path="/" render={()=> <SignUp />}/>
      </Switch>
    </div>
  );
}

export default App;
