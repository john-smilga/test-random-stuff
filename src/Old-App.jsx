import NestedSelectDropdowns from './NestedSelectDropdowns';
const App = () => {
  const countries = [
    { id: '1', name: 'USA' },
    { id: '2', name: 'Canada' },
    { id: '3', name: 'UK' },
  ];

  const citiesByCountry = {
    1: ['New York', 'Los Angeles', 'Chicago'],
    2: ['Toronto', 'Vancouver', 'Montreal'],
    3: ['London', 'Manchester', 'Birmingham'],
  };

  const areasByCity = {
    'New York': ['Manhattan', 'Brooklyn', 'Queens'],
    'Los Angeles': ['Hollywood', 'Venice', 'Beverly Hills'],
    Chicago: ['Lincoln Park', 'Hyde Park', 'Wicker Park'],
    Toronto: ['Yorkville', 'Chinatown', 'Queen West'],
    Vancouver: ['Kitsilano', 'Gastown', 'Yaletown'],
    Montreal: ['Plateau', 'Mile End', 'Downtown'],
    London: ['Camden', 'Greenwich', 'Westminster'],
    Manchester: ['Didsbury', 'Ancoats', 'Chorlton'],
    Birmingham: ['Edgbaston', 'Harborne', 'Selly Oak'],
  };

  return (
    <div>
      <NestedSelectDropdowns
        title='three levels deep'
        countries={countries}
        citiesByCountry={citiesByCountry}
        areasByCity={areasByCity}
      />

      <NestedSelectDropdowns
        title='two levels deep'
        countries={countries}
        citiesByCountry={citiesByCountry}
      />

      <NestedSelectDropdowns title='one level deep' countries={countries} />
    </div>
  );
};
export default App;
