import React from 'react';

const Persons = ({ filteredPersons, deleteContact }) => {
  return (
    <div>
      {filteredPersons.map(person => (
        <p key={person.id}>
          {person.name} {person.phone}
          <button onClick={() => deleteContact(person.id, person.name)} 
          style={{borderRadius: "8px", margin:"8px", background:"lightblue"}}  
          >delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
