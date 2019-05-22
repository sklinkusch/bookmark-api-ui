import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import "../styles/App.scss";
import IntroForm from "./IntroForm";
import List from "./List";
import Edidt from "./Edidt";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Route exact path="/" component={IntroForm} />
        <Route path="/bookmarks" component={List} />
        <Route path="/add" component={Edidt} />
      </BrowserRouter>
    </div>
  );
}

export default App;
