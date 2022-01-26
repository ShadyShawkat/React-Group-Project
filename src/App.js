import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Missions from './components/Missions/Missions';
import NavBar from './components/Navbar/NavBar';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile/Profile';
import { fetchRockets } from './redux/rockets';
import { getMissions } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(getMissions());
  }, []);

  return (
    <>
      <NavBar />
      <div className="mt-20 px-6">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
