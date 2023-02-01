const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => 
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
  </>

const Part = ({ part }) => 
<p>
  {part.name} {part.exercises}
</p>

console.log("here1")
const Course = ({course})=>{
    console.log("here2")
    console.log(course)
    return (
        <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        </>
    )

}

export default Course