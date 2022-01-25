import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => {
  const { name, imageSrc } = rocket;

  return (
    <>
      <img src={imageSrc} alt="rocket" />
      <div>{name}</div>
    </>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;
