import { createSlice } from '@reduxjs/toolkit';

const divisions = [
  { id: '1', name: '011 Atlanta' },
  { id: '2', name: '014 Cincinnati' },
];

const districts = {
  1: [
    { code: '01', name: 'First District' },
    { code: '02', name: 'Second District' },
  ],
  2: [
    { code: 'OJ', name: 'OJ' },
    { code: 'OK', name: 'OK' },
  ],
};
const initialState = {
  divisions: divisions,
  selectedDivision: null,
  districts: districts,
  selectedDistrict: null,
};

const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    updateSelectedDivision(state, action) {
      const division = state.divisions.find(
        (division) => division.id === action.payload
      );
      state.selectedDivision = division;
      state.selectedDistrict = null;
    },
    updateSelectedDistrict(state, action) {
      const { id, code } = action.payload;
      const district = state.districts[id].find(
        (district) => district.code === code
      );
      state.selectedDistrict = district;
    },
  },
});

export const { updateSelectedDivision, updateSelectedDistrict } =
  storesSlice.actions;

export default storesSlice.reducer;
