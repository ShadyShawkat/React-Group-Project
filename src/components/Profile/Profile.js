import React from 'react';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => {
    const { missions } = state.missions;
    return missions.filter((missions) => missions.reserved);
  });
  return (
    <div className="flex justify-center gap-6">
      <div className="basis-1/3">
        <h3 className="text-xl font-bold">My Missions</h3>
        {missions.length === 0 && (
          <div className="text-3xl text-gray-400 font-bold select-none mt-3">
            Not member yet
          </div>
        )}
        {missions.length > 0 && (
          <ul className="flex flex-col mt-3 border-2 divide-y-2 divide-slate-300 rounded-md border-slate-400">
            {missions.map((missions) => (
              <li
                data-testid="reservedMissionItem"
                key={missions.mission_id}
                className="p-2 flex gap-5 items-center"
              >
                <p>{missions.mission_name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="basis-1/3">
        <h3 className="text-xl font-bold">My Rockets</h3>
        {rockets.length === 0 && (
          <div className="text-3xl text-gray-400 font-bold select-none mt-3">
            No rockets reserved
          </div>
        )}
        {rockets.length > 0 && (
          <ul className="flex flex-col mt-3 border-2 divide-y-2 divide-slate-300 rounded-md border-slate-400">
            {rockets.map((rocket) => (
              <li
                key={rocket.id}
                className="p-2 flex gap-5 items-center"
                data-testid="reservedRocketItem"
              >
                <img
                  src={rocket.imageSrc}
                  className="w-8 h-8 rounded-sm"
                  alt="rocket"
                />
                <p>{rocket.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Profile.propTypes = {};

// Profile.defaultProps = {};

export default Profile;
