import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateSelectedDivision } from './features/divisionsSlice';
const Component = () => {
  const dispatch = useDispatch();
  const { divisions, selectedDivision } = useSelector(
    (state) => state.divisions
  );
  const handleChange = (event) => {
    dispatch(updateSelectedDivision(event.target.value));
  };
  return (
    <div>
      <select
        value={selectedDivision ? selectedDivision.id : ''}
        onChange={handleChange}
      >
        {selectedDivision === null && (
          <option value=''>Select a division</option>
        )}
        {divisions.map((division) => (
          <option key={division.id} value={division.id}>
            {division.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Component;
