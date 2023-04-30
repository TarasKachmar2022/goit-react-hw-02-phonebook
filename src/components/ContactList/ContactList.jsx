import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.Styled';

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
