import { useState, useEffect } from 'react'
import axios from 'axios'
import phoneBookService from './services/phoneBook'
import Filter from './componentsPhonebookStep5/Filter'
import PersonForm from './componentsPhonebookStep5/PersonForm'
import Persons from './componentsPhonebookStep5/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    phoneBookService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault();

    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, phone: newPhone };

        phoneBookService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson));
            setNewName('');
            setNewPhone('');
          })
          .catch(error => {
            alert(`The contact '${existingPerson.name}' was already deleted from server`);
            setPersons(persons.filter(person => person.id !== existingPerson.id));
          });
      }
    } else {
      const newPerson = {
        name: newName,
        phone: newPhone
      };

      phoneBookService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewPhone('');
        });
    }
  };


  const deleteContact = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phoneBookService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm newName={newName} newPhone={newPhone} handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange} addContact={addContact}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deleteContact={deleteContact} />
    </div>
  )
}

export default App