// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name:
// })

import { createAction, combineReducers, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');

const value = createReducer(0, {
  [increment]: (state, _) => state + 1,
});

export default combineReducers({ value });
