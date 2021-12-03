import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFliter(state, { payload }) {
      return payload;
    },
  },
});

export const { changeFliter } = filterSlice.actions;
export default filterSlice.reducer;
