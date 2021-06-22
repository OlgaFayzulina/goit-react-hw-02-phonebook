import React from "react";
import PropTypes from "prop-types";
import styles from '../../components/Contacts/Contacts.module.css'

const Contacts = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.details}>
            {name} : {number}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContact(id)}>Delete
          </button>
        </li>
      ))}
    </ul>
  );

  Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  export default Contacts;