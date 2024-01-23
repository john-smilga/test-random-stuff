import { createSlice } from '@reduxjs/toolkit';

const divisions = [
  { id: 1, name: 'Division 1' },
  { id: 2, name: 'Division 2' },
  { id: 3, name: 'Division 3' },
  { id: 4, name: 'Division 4' },
  { id: 5, name: 'Division 5' },
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
        (division) => division.id === Number(action.payload)
      );
      state.selectedDivision = division;
    },
  },
});

export const { updateSelectedDivision } = divisionsSlice.actions;

export default divisionsSlice.reducer;
