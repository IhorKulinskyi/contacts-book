import { Wrapper, FilterInput } from './Filter.styled';
import { setFilterValue } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from "redux/contacts/selectors";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <Wrapper>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </Wrapper>
  );
};

export default Filter;
