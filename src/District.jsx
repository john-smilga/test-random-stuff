import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedDistrict } from './features/districtsSlice';

const District = () => {
  const dispatch = useDispatch();
  const { divisions, selectedDivision } = useSelector(
    (state) => state.divisions
  );
  const { districts, selectedDistrict } = useSelector(
    (state) => state.districts
  );

  const handleChange = (event) => {
    dispatch(
      updateSelectedDistrict({
        id: selectedDivision.id,
        code: event.target.value,
      })
    );
  };
  const fieldStyle = {
    marginTop: '15px',
  };
  const optionStyle = {
    marginRight: '10px',
  };
  const optionLabelStyle = {
    marginLeft: '3px',
    width: '100%',
  };

  if (!selectedDivision) return null;

  return (
    <div>
      <label style={optionStyle}>District:</label>
      <select
        value={selectedDistrict ? selectedDistrict.code : ''}
        onChange={handleChange}
      >
        {selectedDistrict === null && (
          <option value=''>Select a district</option>
        )}
        {districts[selectedDivision.id].map((district) => {
          return (
            <option key={district.code} value={district.code}>
              {district.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default District;
