const Total = ({ parts }) => {
    console.log("part here is: ", parts)
    const total = parts.reduce((accumulator,currentValue) =>{
        console.log('what is happening', accumulator, currentValue.exercises)
        return accumulator+currentValue.exercises
    }, 0)

    return (
        <>
        <p>total of {total} exercises</p>
        </>
    )
}
    
export default Total