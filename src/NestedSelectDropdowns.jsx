import React, { useState } from 'react';

const NestedSelectDropdowns = ({
  title,
  countries,
  citiesByCountry = {},
  areasByCity = {},
}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
    setSelectedArea(''); // Reset city and area when the country changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedArea(''); // Reset area when the city changes
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <label>Country:</label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value=''>Select a country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && citiesByCountry[selectedCountry] && (
        <div>
          <label>City:</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value=''>Select a city</option>
            {citiesByCountry[selectedCountry].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCity && areasByCity && areasByCity[selectedCity] && (
        <div>
          <label>Area:</label>
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value=''>Select an area</option>
            {areasByCity[selectedCity].map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default NestedSelectDropdowns;
