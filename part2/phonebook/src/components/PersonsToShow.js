const PersonsToShow=({persons, newFilter})=>{
    const personsToShow = (newFilter === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    // console.log("personsToShow: ", personsToShow)
    // console.log("newFilter: ", newFilter)
    // console.log("filted: ", persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())))

    return (
        <>
        {personsToShow.map((element)=><p key={element.id}> {element.name} {element.number}</p>)}
        </>
    )
}

export default PersonsToShow