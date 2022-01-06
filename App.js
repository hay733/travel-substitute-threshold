import React from 'react';

import Quiz from './pages/Quiz'
import About from './pages/About'
import Home from './pages/Home'
import Results from './pages/Results'
import Questions from './pages/Questions'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/questions" component={Questions} />
      <Route exact path="/results" component={Results} />
    </div>
  );
}
export default App;
