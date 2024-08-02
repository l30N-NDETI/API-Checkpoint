// src/App.js

import React from 'react';
import './App.css';
import UserList from './UserList'; // Import the UserList component

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <UserList /> {/* Render the UserList component */}
      </header>
    </div>
  );
};

export default App;
