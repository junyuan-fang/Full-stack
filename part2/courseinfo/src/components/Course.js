const Header = ({ course }) => {<h1>{course}</h1>}

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
    


const Content = ({ parts }) => {
    return(
        <>
        <Part
          part={parts[0]} 
        />
        <Part
          part={parts[1]} 
        />
        <Part
          part={parts[2]} 
        />
        <Part
          part={parts[3]} 
        />       
      </>
    )
}



const Part = ({ part }) => 
<p>
  {part.name} {part.exercises}
</p>


const Course = ({course})=>{
    console.log(course)
    console.log("part is:", course.parts)

    return (
        <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts = {course.parts}/>
        </>
    )

}

export default Course