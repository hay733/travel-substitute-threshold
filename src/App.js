import Quiz from './pages/Quiz'
import About from './pages/About'
import Home from './pages/Home'
import Results from './pages/Results'
import Questions from './pages/question pages/QuestionsKnowMental'

import { Route } from 'react-router-dom'

import QuestionsKnowMental from './pages/question pages/QuestionsKnowMental'
import QuestionsEngagementCopresenceSSA from './pages/question pages/QuestionsEngagementCopresenceSSA'
import QuestionsUsability from './pages/question pages/QuestionsUsability'
import QuestionsRapportTrust from './pages/question pages/QuestionsRapportTrust'

// import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/quiz" component={Quiz} />
      {/* set stepper pages */}
      <Route exact path="/questions-knowledge_mentalWorkload" component={QuestionsKnowMental} />
      <Route exact path="/questions-usability" component={QuestionsUsability} />
      <Route exact path="/questions-rapport_trust" component={QuestionsRapportTrust} />
      <Route exact path="/questions-engagement_copresence_ssa" component={QuestionsEngagementCopresenceSSA} />

      <Route exact path="/results" component={Results} />
    </div>
  );
}
export default App;
