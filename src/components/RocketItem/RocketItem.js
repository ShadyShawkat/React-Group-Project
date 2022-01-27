import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { rocketsActions } from '../../redux/rockets/rockets';

const reserveBtnClasses = 'bg-sky-600 text-white hover:bg-sky-800';
const cancelReservationBtnClasses = 'bg-gray-200 text-black hover:bg-gray-300 border-red-600 border-2';

const RocketItem = ({ rocket }) => {
  const {
    id, name, imageSrc, description, reserved,
  } = rocket;
  const dispatch = useDispatch();

  const toggleReservationHandler = () => {
    dispatch(rocketsActions.toggleRocket(id));
  };

  return (
    <>
      <div className="md:w-48 md:h-48 w-32 h-32 rounded-md overflow-hidden flex flex-shrink-0 flex-grow-0 self-center relative border-2">
        {reserved && (
          <div className="w-28 h-14 absolute -top-5 -right-6 bg-white rounded-full text-black font-bold text-md pt-6 pl-3 select-none">
            Reserved
          </div>
        )}
        <img src={imageSrc} alt="rocket" />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{description}</p>
        <button
          type="button"
          data-testid="toggleReservationBtn"
          className={`px-2 py-1 mt-auto rounded-md font-medium ${
            reserved ? cancelReservationBtnClasses : reserveBtnClasses
          }`}
          onClick={toggleReservationHandler}
        >
          {!reserved && 'Reserve Rocket'}
          {reserved && 'Cancel Reservation'}
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
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketItem;
