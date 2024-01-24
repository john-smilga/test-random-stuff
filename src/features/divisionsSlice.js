import { createSlice } from '@reduxjs/toolkit';

const divisions = [
  { id: '1', name: '011 Atlanta' },
  { id: '2', name: '014 Cincinnati' },
];
const initialState = {
  divisions: divisions,
  selectedDivision: null,
};

const divisionsSlice = createSlice({
  name: 'divisions',
  initialState,
  reducers: {
    updateSelectedDivision(state, action) {
      const division = state.divisions.find(
        (division) => division.id === action.payload
      );
      state.selectedDivision = division;
    },
  },
});

export const { updateSelectedDivision } = divisionsSlice.actions;

export default divisionsSlice.reducer;
