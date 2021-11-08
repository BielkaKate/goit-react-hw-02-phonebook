import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.listItem} key={id}>
        <span>
          {name}: {number}
        </span>
        <button className={s.deleteButton} onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleDelete: PropTypes.func,
};

export default ContactList;
