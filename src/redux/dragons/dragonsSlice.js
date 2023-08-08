import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../Assets/planet (1).png';

const initialState = {
  dragons: [
    {
      id: uuidv4(),
      name: 'Dragon1',
      type: 'rocket',
      flickr_images: logo,
    },
    {
      id: uuidv4(),
      name: 'Dragon2',
      type: 'raptor',
      flickr_images: logo,
    },
  ],
};

const dragonsSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
});

export default dragonsSlice.reducer;
