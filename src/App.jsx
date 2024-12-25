import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './signin';
import RepoScreen from './repo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/repo" element={<RepoScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
