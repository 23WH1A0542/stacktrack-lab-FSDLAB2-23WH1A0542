import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import QuestionComponent from "./components/question/QuestionComponent";

function App() {
  return (
    <div>
      <Home />
      <Router>
      <Routes>
        <Route path="/" element={<QuestionComponent />} />
      </Routes>
      </Router>

      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
