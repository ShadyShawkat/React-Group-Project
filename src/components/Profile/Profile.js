import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const Profile = () => {
  const rockets = useSelector((state) =>
    state.rockets.rockets.filter((rocket) => rocket.reserved),
  );
  return (
    <div className="flex justify-center gap-6">
      <div className="basis-1/3">
        <h3 className="text-xl font-bold">My Missions</h3>
      </div>
      <div className="basis-1/3">
        <h3 className="text-xl font-bold">My Rockets</h3>
        <ul className="flex flex-col mt-3 border-2 divide-y-2 divide-slate-300 rounded-md border-slate-400">
          {rockets.map((rocket) => (
            <li key={rocket.id} className="p-2 flex gap-5 items-center">
              <img
                src={rocket.imageSrc}
                className="w-8 h-8 rounded-sm"
                alt="rocket"
              />
              <p>{rocket.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Profile.propTypes = {};

// Profile.defaultProps = {};

export default Profile;
