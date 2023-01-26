// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
    
  )
}

const Part = (props) =>{
  return (
    <>
      <p>
      {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  console.log(props.parts[0].name)
  return(
    <>
    <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
    <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
    <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) =>{
  let value = 0
  props.parts.forEach(element => {
    value += element.exercises
    console.log(element)
  });
  return(
  <>
  <p>Number of exercises {value}</p>
  </>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
      
//     </div>
//   )
// }

export default App