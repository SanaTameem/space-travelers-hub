import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragonsData: [],
  isLoading: false,
  error: 'null',
};

export const fetchDragons = createAsyncThunk('dragon/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  // console.log(response.data);
  return response.data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    flickr_images: dragon.flickr_images,
    description: dragon.description,
    reserved: false,
    wikipedia: dragon.wikipedia,
  }));
});

export const reserveDragon = createAsyncThunk('dragon/reserveDragon', (id) => id);
export const cancelDragon = createAsyncThunk('dragon/cancelDragon', (id) => id);

const dragonsSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDragons.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDragons.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dragonsData = action.payload;
    },
    [fetchDragons.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [reserveDragon.fulfilled]: (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      const newState = state.dragonsData.map((dragon) => {
        if (dragon.id === id) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
      state.dragonsData = newState;
    },
    [cancelDragon.fulfilled]: (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      const newState = state.dragonsData.map((dragon) => {
        if (dragon.id === id) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
      state.dragonsData = newState;
    },
  },
});

export default dragonsSlice.reducer;
