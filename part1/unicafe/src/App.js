import { useState } from 'react'


const Header = ({text}) =>{
  return (
    <>
   <h1> {text}</h1>
    </>
  )
}

const Button = ({label, handleClick}) =>{
  return (
    <>
    <button onClick={handleClick}>{label}</button>
    </>
  )
}
const Display = ({label, value, percent}) =>{
  if (percent === true) {
    return(
      <>
      {label} {value} %<br/>
      </>
    )
  }
  return(
    <>
    {label} {value}<br/>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = (good-bad)/(good+neutral+bad)
  const persentage = (good)/(good+neutral+bad) *100
  return (
    <div>
      <Header text = {"give feedback"}/>
      <Button label = {"good"} handleClick={()=>setGood(good + 1)}/>
      <Button label = {"neutral"} handleClick={()=>setNeutral(neutral + 1)}/>
      <Button label = {"bad"} handleClick={()=>setBad(bad + 1)}/>
      <Header text = {"statistics"} />
      <Display label = {"good"} value = {good}/>
      <Display label = {"neutral"} value = {neutral}/>
      <Display label = {"bad"} value = {bad}/>
      <Display label = {"all"} value = {good+neutral+bad}/>
      <Display label = {"average"} value = {average}/>
      <Display label = {"persentage"} value = {persentage} percent = {true}/> 
    </div>
  )
}

export default App