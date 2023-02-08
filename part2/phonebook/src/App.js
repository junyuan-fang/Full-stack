import { useState } from 'react'

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
  const personsToShow = (newFilter === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  console.log("personsToShow: ", personsToShow)
  console.log("newFilter: ", newFilter)
  console.log("filted: ", persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())))

  const addPeople = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      name : newName,
      number : newNumber,
      id : persons.length + 1,
    }
    setPersons(persons.concat(noteObject))
    const oldName = newName 
    const oldNumber = newNumber 
    setNewName('')
    setNewNumber('')
    alert(`${oldName} is already added to phonebook, which is ${oldNumber}`)
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log("event.target.value: ",event.target.value)
    setNewFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          filter shown with<input value = {newFilter} onChange = {handleFilterChange}/> 
        </div>
      </form>
      <h2>add a new</h2>

      <form onSubmit={addPeople}>
        <div>
          name: <input 
                  value = {newName}
                  onChange = {handleNameChange}/>
        </div>

        <div>
          number: <input 
                    value = {newNumber}
                    onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((element)=><p key={element.id}> {element.name} {element.number}</p>)}
      <div>debug: {newName}</div>
    </div>
    
  )
}

export default App