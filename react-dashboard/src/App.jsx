import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Logout from './components/Logout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
