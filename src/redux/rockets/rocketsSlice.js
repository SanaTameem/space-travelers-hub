import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocketsData: [],
  isLoading: false,
  error: null,
};

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
    type: rocket.type,
    flickr_images: rocket.flickr_images[0],
    description: rocket.description,
    reserved: false,
    readMore: rocket.wikipedia,
  }));
});

export const reserveRocket = createAsyncThunk('rocket/reserveRocket', (id) => id);
export const cancelRocket = createAsyncThunk('rocket/cancelRocket', (id) => id);

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rocketsData = action.payload;
      state.error = '';
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.rocketsData = [];
      state.error = action.error.message;
    });
    builder.addCase(reserveRocket.fulfilled, (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      const newState = state.rocketsData.map((rocket) => (
        rocket.id === id ? { ...rocket, reserved: true } : rocket));
      state.rocketsData = newState;
    });
    builder.addCase(cancelRocket.fulfilled, (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      const newState = state.rocketsData.map((rocket) => (
        rocket.id === id ? { ...rocket, reserved: false } : rocket));
      state.rocketsData = newState;
    });
  },
});

export default rocketSlice.reducer;
