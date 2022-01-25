import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions/Missions';

import NavBar from './components/Navbar/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<div>Hi</div>} />
      <Route path="missions" element={<Missions />} />
    </Routes>
  </>
);

export default App;
