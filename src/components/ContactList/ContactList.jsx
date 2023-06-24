import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = props => {
  const { contacts, onClick } = props;

  const handleDelete = id => onClick(id.target.value);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.listEl}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              value={contact.id}
              onClick={handleDelete}
              className={css.delBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
};
