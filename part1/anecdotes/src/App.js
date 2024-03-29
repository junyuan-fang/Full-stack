import { useState } from 'react'


const Button = ({onClick,label})=>{
  return(
    <>
    <button onClick={onClick}>{label}</button>
    </>
  )
}
const Header =({text})=>{
  return(
  <>
  <h1>{text}</h1>
  </>
  )
}

// function getMaxIndex(props){
//   let max = props[0];
//   let max_index = 0;
//   console.log("aaaaa",props[2])
//   for (let i = 0; i<props.length; i++ ){
//     if (props[i]>max){
//       max = props[i];
//       max_index = i;
//       console.log("here")
//     }
//   }
//   console.log(max_index)
//   console.log(max)
//   return max_index
// }

function indexOfMaxValue(votes) {

  let max = votes[0];
  let maxIndex = 0;
  console.log('object is', votes)
  console.log('Length is:',votes.length) 
  for (let i = 1; i < votes.length; i++) {
    
      if (votes[i] > max) {
          maxIndex = i;
          max = votes[i];
      }
  }
  if (votes[maxIndex] === 0) {
    return -1
  }
  // console.log(votes)
  // console.log(maxIndex)
  return maxIndex;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const array = new Uint8Array(anecdotes.length)
  //console.log(array)
  const [voted, setVoted] = useState(array)
  
  

  const nextClicked=()=>()=>{
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
    // console.log(anecdotes.length)
  }
  const voteClicked=(index)=>()=>{
    const copy = [...voted]
    copy[index]+=1
    setVoted(copy)
    console.log(copy)
  }

  // let maxValueIndex = indexOfMaxValue(voted)
  return (
    <div>
      <Header text="Anecdote of the day"/>
      {anecdotes[selected]}<br/>
      <p>has {voted[selected]} votes</p>
      <Button onClick ={voteClicked(selected)} label = {"vote"}/>
      <Button onClick ={nextClicked()} label = {"next anacdote"}/>
      <Header text="Anecdote with the most votes"/>
      {anecdotes[indexOfMaxValue(voted)]}<br/>
      <p>has {voted[indexOfMaxValue(voted)]} votes</p>
    </div>
    
  )
}

export default App