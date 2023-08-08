import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../Assets/planet (1).png';

const initialState = {
  rockets: [
    {
      id: uuidv4(),
      name: 'Falcon1',
      type: 'rocket',
      flickr_images: logo,
    },
    {
      id: uuidv4(),
      name: 'Falcon9',
      type: 'raptor',
      flickr_images: logo,
    },
    {
      id: uuidv4(),
      name: 'Falcon Heavy',
      type: 'merlin',
      flickr_images: logo,
    },
  ],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
});

export default rocketSlice.reducer;
