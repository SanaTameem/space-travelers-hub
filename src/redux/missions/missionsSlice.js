import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();

      const missions = data.map((mission) => ({
        id: mission.mission_id, // Add 'id' field
        mission_name: mission.mission_name,
        description: mission.description,
        status: mission.status,
        reserved: false, // Add 'reserved' field
      }));

      return missions;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const joinMission = createAsyncThunk(
  'missions/joinMission',
  (id, { getState }) => {
    const { missions } = getState().mission;
    const updatedMissions = missions.map((mission) => {
      if (mission.id === id) {
        return { ...mission, reserved: true };
      }
      return mission;
    });

    return updatedMissions;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
    builder.addCase(joinMission.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export default missionsSlice.reducer;
