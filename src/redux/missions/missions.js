/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../API/missions';

const initialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missionSuccess(state, action) {
      state.missions = action.payload;
    },

  },
});

export const { missionSuccess } = missionsSlice.actions;
export const getMissions = () => async (dispatch) => {
  const missions = await fetchMissions();
  dispatch(missionSuccess(missions));
};

export default missionsSlice.reducer;
