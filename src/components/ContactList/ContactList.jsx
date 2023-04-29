import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
