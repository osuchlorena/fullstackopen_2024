import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone:"0987414141"

    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addContact = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const noteObject = {
      name: newName,
      phone: newPhone
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
    setNewPhone("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div style={{display: "flex", flexDirection:"column"}}>
          name: <input value={newName} onChange={handleNameChange} style={{width:"100px"}}/>
          phone: <input value={newPhone} onChange={handlePhoneChange} style={{width:"100px"}}/>
        </div>
        <div>
          <button type="submit" style={{marginTop:"10px"}}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => 
        (
          <p key={person.name}>{person.name}  {person.phone}</p>
        )
        )
      }
    </div>
  )
}

export default App