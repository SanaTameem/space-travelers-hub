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
  }));
});

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
  },
});

export default dragonsSlice.reducer;
