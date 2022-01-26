/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ mission }) => {
  const {
    mission_name, mission_id, description, reserved,
  } = mission;

  return (

    <tr>
      <td className="px-6 py-4">
        <div className="flex items-center">

          <div className="text-sm font-medium text-gray-900" id={mission_id}>
            {mission_name}
          </div>

        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">
          {description}
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded bg-gray-300 text-grey-800">
          {!reserved && 'NOT A MEMBER'}
        </p>
      </td>
      <td className="px-6 py-4 text-right text-sm font-medium">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">Join Mission</button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.exact({
    mission_name: PropTypes.string,
    mission_id: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
