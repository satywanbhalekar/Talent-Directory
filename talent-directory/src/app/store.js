// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import talentsReducer from '../features/talents/talentsSlice';

export const store = configureStore({
  reducer: {
    talents: talentsReducer,
  },
});
