import React, { Component } from 'react';
import shortid from "shortid";

import Container from './components/Container';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

class App extends Component {
    state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: '',
    };

    addContact = ({ name,number }) => {
        const { contacts } = this.state;
        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };
       
        const existedContact = contacts.find((contact) => 
             contact.name === newContact.name
        );
        
        existedContact
        ? alert('This contact already exist')
        : this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
    };

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();
    
        return contacts.filter(contact =>
          contact.name.toString().toLowerCase().includes(normalizedFilter),
        );
      };

    deleteContact = contactId => {
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(contact => contact.id !== contactId),
        }));
    };

    render() {
       const { filter } = this.state;
       const visibleContacts = this.getVisibleContacts();

        return (
            <Container>
                <h1>Phonebook</h1>
                    <Form onSubmit={this.addContact} />
        
                <h2>Contacts</h2>
                <Filter value={filter} onChange={this.changeFilter}></Filter>
                <Contacts
                    contacts={visibleContacts}
                    onDeleteContact={this.deleteContact}>
                </Contacts>
            </Container>
        );
    }
}

export default App;