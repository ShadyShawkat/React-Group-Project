import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchRockets } from './redux/rockets';

import NavBar from './components/Navbar/NavBar';
import Rockets from './components/Rockets/Rockets';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </>
  );
};

export default App;
