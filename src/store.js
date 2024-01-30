import { configureStore } from '@reduxjs/toolkit';
// import divisionsReducer from './features/divisionsSlice';
// import districtsReducer from './features/districtsSlice';
import storesReducer from './features/storesSlice';
export const store = configureStore({
  reducer: {
    stores: storesReducer,
  },
});
