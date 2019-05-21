import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://bookmark-api.fbw-11.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" class="btn btn-primary">Bookmark API v1.0</button>

        </a>
      </header>
    </div>
  );
}

export default App;
