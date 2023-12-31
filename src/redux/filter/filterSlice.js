import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export default filterSlice.reducer;
