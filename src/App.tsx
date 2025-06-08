import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Claude!</h1>
        <p>This is a demonstration MVP generated for you.</p>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Feature 1</h2>
            <p>Description of feature 1</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Feature 2</h2>
            <p>Description of feature 2</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;