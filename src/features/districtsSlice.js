import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

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
  districts: districts,
  selectedDistrict: null,
};

const districtSlice = createSlice({
  name: 'districts',
  initialState,
  reducers: {
    updateSelectedDistrict(state, action) {
      const { id, code } = action.payload;
      const district = state.districts[id].find(
        (district) => district.code === code
      );
      state.selectedDistrict = district;
    },
  },
});

export const { updateSelectedDistrict } = districtSlice.actions;

export default districtSlice.reducer;
