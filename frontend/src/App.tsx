import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import UsersList from './components/pages/UsersList';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<UsersList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
