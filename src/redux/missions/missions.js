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
    missionSuccess: (state, action) => {
      state.missions = action.payload;
    },
    toggleMission: (state, action) => {
      const missions = [...state.missions];
      const filterMissions = missions.map((e) => {
        if (e.mission_id !== action.payload) {
          return e;
        }
        return { ...e, reserved: !e.reserved };
      });
      state.missions = filterMissions;
    },

  },
});

export const { missionSuccess } = missionsSlice.actions;
export const getMissions = () => async (dispatch) => {
  const missions = await fetchMissions();
  dispatch(missionSuccess(missions));
};

export const { toggleMission, decrement } = missionsSlice.actions;
export default missionsSlice.reducer;
