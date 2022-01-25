import React from 'react';
import { useSelector } from 'react-redux';

import RocketItem from '../RocketItem/RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <ul>
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          <RocketItem rocket={rocket} />
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
