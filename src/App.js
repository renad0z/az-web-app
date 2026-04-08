import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Azure Static Web Apps</h1>
        <p>
          Built with <strong>React</strong> and deployed on <strong>Azure</strong>
        </p>
        <div className="features">
          <div className="feature-card">
            <h3>⚡ Fast</h3>
            <p>Globally distributed static content</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure</h3>
            <p>HTTPS by default</p>
          </div>
          <div className="feature-card">
            <h3>📦 Scalable</h3>
            <p>Automatically scales with demand</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
