/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import API from '../API/rockets';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { rockets: [] },
  reducers: {
    fetchRockets(state, action) {
      const rocketsData = action.payload;
      state.rockets = rocketsData.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        imageSrc: rocket.flickr_images[0],
        description: rocket.description,
        reserved: false,
      }));
    },
    toggleRocket(state, action) {
      state.rockets = state.rockets.map((rocket) => (rocket.id === action.payload
        ? {
          ...rocket,
          reserved: !rocket.reserved,
        }
        : rocket));
    },
  },
});

export const fetchRockets = () => async (dispatch) => {
  const rockets = await API.fetchrocketsAsync();
  dispatch(rocketsSlice.actions.fetchRockets(rockets));
};

export const rocketsActions = rocketsSlice.actions;

export default rocketsSlice.reducer;
