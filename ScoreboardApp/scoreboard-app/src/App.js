import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignIn from './components/Screens/SignIn/SignIn';
import Intermission from './components/Screens/Intermission/Intermission';
import QuestionOngoing from './components/Screens/QuestionOngoing/QuestionOngoing'
import song from './song.mp3'

import {useEffect} from 'react'

function App() {
  let audio;

  useEffect(() => {
    audio = document.getElementById('song');
    audio.volume = 0.2;
  })

  return (
    <div className="App">
    <Switch>
      <Route path="/question" render={() => <QuestionOngoing /> } />
      <Route path="/intermission" render={() => <Intermission />} />
      <Route path="/" render={(routerProps) => <SignIn history={routerProps.history} audioCallback={() => {audio.play()}} />} />
    </Switch>
    <audio id="song" autoPlay={true} loop={true}>
      <source type="audio/mp3" src={song} />
    </audio>
    </div>
    );
  }
  
  export default App;
  