import { configureStore } from '@reduxjs/toolkit';
import divisionsReducer from './features/divisionsSlice';
import districtsReducer from './features/districtsSlice';
export const store = configureStore({
  reducer: {
    divisions: divisionsReducer,
    districts: districtsReducer,
  },
});
