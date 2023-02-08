const Filter = ({newFilter, setNewFilter})=>{
    const handleFilterChange = (event) => {
        // console.log(setNewFilter)
        // console.log("event.target.value: ",event.target.value)

        setNewFilter(event.target.value)
      }
    return(
        <>
        <form >
            <div>
                filter shown with<input value = {newFilter} onChange = {handleFilterChange}/> 
            </div>
        </form>
        </>
    )
}

export default Filter