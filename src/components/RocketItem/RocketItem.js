import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => {
  const { name, imageSrc, description } = rocket;

  return (
    <>
      <img src={imageSrc} alt="rocket" className="w-48 rounded-md" />
      <div className="flex flex-col gap-2 items-start">
        <h3 className="">{name}</h3>
        <p>{description}</p>
        <button
          type="button"
          className="bg-sky-600 text-white rounded-sm px-2 py-1 hover:bg-sky-800"
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
