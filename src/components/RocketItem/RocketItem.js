import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => {
  const { name, imageSrc, description } = rocket;

  return (
    <>
      <img src={imageSrc} alt="rocket" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
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
