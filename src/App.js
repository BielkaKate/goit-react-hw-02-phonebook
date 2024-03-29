import './App.css';
import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import shortid from 'shortid';
import PropTypes, { shape } from 'prop-types';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.number,
      }),
    ),
    filter: PropTypes.string,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = data => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    )
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            { id: shortid.generate(), ...data },
            ...prevState.contacts,
          ],
        }));
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm propOnSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} handleInputChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          handleDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
