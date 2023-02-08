import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsToShow from './components/PersonsToShow'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  //console.log("hehehehehehe", persons[0].name)

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter = {newFilter} setNewFilter = {setNewFilter}/>

      <h2>add a new</h2>

      <PersonForm persons = {persons} 
                  newName={newName} 
                  newNumber = {newNumber} 
                  setNewNumber={setNewNumber} 
                  setNewName={setNewName} 
                  setPersons={setPersons}/>


      <h2>Numbers</h2>

      {/* {personsToShow.map((element)=><p key={element.id}> {element.name} {element.number}</p>)} */}
      <PersonsToShow persons = {persons} newFilter={newFilter}/>
      <div>debug: {newName}</div>
    </div>
    
  )
}

export default App