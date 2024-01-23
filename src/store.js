import { configureStore } from '@reduxjs/toolkit';
import divisionsReducer from './features/divisionsSlice';
export const store = configureStore({
  reducer: {
    divisions: divisionsReducer,
  },
});
