import React from 'react';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import QuestionComponent from "./QuestionComponent";

function App() {
  return (
    <div>
      <Home />
      <BrowserRouter>
      <Routers>
        <route path="/" element={<QuestionComponent />} />
      </Routers>
      </BrowserRouter>

      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
