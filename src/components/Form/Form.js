import React, { Component } from "react";
import styles from '../../components/Form/Form.module.css'

const INITIAL_STATE = {
    name: '',
    number: '',
  };

  class Form extends Component {
    state = {
      ...INITIAL_STATE,
    };

    handelChange = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value });
      };

    handelSubmit = event => {
        event.preventDefault();
    
        const { name, number } = this.state;
    
        this.props.onSubmit({ name,number });
        this.reset();
      };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
      };
 
      render() {
        const { name, number } = this.state;

        return (
            <form className={styles.form} onSubmit={this.handelSubmit}>
                <label className={styles.label}>Name
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={this.handelChange}
                    />
                </label>
                <label className={styles.label}>Number
                    <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={this.handelChange}
                    />
                </label>
                <button className={styles.button} type="submit">Add contact
                </button>
            </form>
        );   
      }
    }

export default Form;