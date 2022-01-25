import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => {
  const { name, imageSrc, description } = rocket;

  return (
    <>
      <div className="w-48 h-48 rounded-md overflow-hidden flex flex-shrink-0 flex-grow-0 self-center">
        <img src={imageSrc} alt="rocket" />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{description}</p>
        <button
          type="button"
          className="bg-sky-600 text-white rounded-sm px-2 py-1 hover:bg-sky-800 mt-auto"
        >
          Reserve Rocket
        </button>
      </div>
    </>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;
