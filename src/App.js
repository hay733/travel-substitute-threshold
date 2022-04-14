import Quiz from './pages/Quiz'
import About from './pages/About'
import Home from './pages/Home'
import Results from './pages/Results'

import { Route } from 'react-router-dom'

import QuestionsKnowMental from './pages/question pages/QuestionsKnowMental'
import QuestionsEngagementCopresenceSSA from './pages/question pages/QuestionsEngagementCopresenceSSA'
import QuestionsUsability from './pages/question pages/QuestionsUsability'
import QuestionsRapportTrust from './pages/question pages/QuestionsRapportTrust'
import Citations from './pages/informational pages/Citations'
import Descriptions from './pages/informational pages/ConstructDescriptions'

// import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* Main Pages */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/results" component={Results} />
      {/* set stepper pages */}
      <Route exact path="/questions-knowledge_mentalWorkload" component={QuestionsKnowMental} />
      <Route exact path="/questions-usability" component={QuestionsUsability} />
      <Route exact path="/questions-rapport_trust" component={QuestionsRapportTrust} />
      <Route exact path="/questions-engagement_copresence_ssa" component={QuestionsEngagementCopresenceSSA} />
      {/* set description + citation pages */}
      <Route exact path="/citations" component={Citations} />
      <Route exact path="/descriptions" component={Descriptions} />
    </div>
  );
}
export default App;
