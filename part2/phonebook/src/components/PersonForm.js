const PersonForm=({persons, newName, newNumber, setNewNumber, setNewName, setPersons})=>{
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

    return (
        <>
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
        </>
    )
}

export default PersonForm