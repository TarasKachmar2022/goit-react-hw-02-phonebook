import { FilterInput } from './ContactsFilter.styled';

const ContactsFilter = ({ filter, changeFilterValue }) => {
  return (
    <FilterInput
      type="text"
      value={filter}
      onChange={changeFilterValue}
    ></FilterInput>
  );
};

export default ContactsFilter;
