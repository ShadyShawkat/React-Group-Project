import React from 'react';
import { useSelector } from 'react-redux';

import RocketItem from '../RocketItem/RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <ul className="px-6 flex flex-col gap-4 mt-16">
      {rockets.map((rocket) => (
        <li
          key={rocket.id}
          className="flex gap-6 bg-white pl-2 pr-5 py-3 rounded-sm"
        >
          <RocketItem rocket={rocket} />
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
