import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<div>Hi</div>} />
    </Routes>
  </>
);

export default App;
