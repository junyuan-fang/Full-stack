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
const StatisticLine = ({text, value, percent}) =>{
  if (percent === true) {
    return(
      <tr>
      <td>{text}</td>
      <td>{value} %</td>
      </tr>
    )
  }
  return(
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  
  const clicked = props.clicked
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const average = (good-bad)/(good+neutral+bad)
  const persentage = (good)/(good+neutral+bad) *100
  if (!clicked){
    return (
      <>
      <Header text = {"statistics"} />
      <StatisticLine text = {"No feedback given"}/>
      </>
    )
  }
  return(
    <>
    <table>
    <StatisticLine text = {"good"} value = {good}/>
    <StatisticLine text = {"neutral"} value = {neutral}/>
    <StatisticLine text = {"bad"} value = {bad}/>
    <StatisticLine text = {"all"} value = {good+neutral+bad}/>
    <StatisticLine text = {"average"} value = {average}/>
    <StatisticLine text = {"positive"} value = {persentage} percent = {true}/> 
    </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicked, setClick] = useState(false)
  const clickGood = ()=>{
    setClick(true)
    setGood(good + 1)
    
  }
  const clickNeutral = ()=>{
    setNeutral(neutral + 1)
    setClick(true)
  }
  const clickBad = ()=>{
    setBad(bad + 1)
    setClick(true)
  }

  return (
    <div>
      <Header text = {"give feedback"}/>
      <Button label = {"good"} handleClick={clickGood}/>
      <Button label = {"neutral"} handleClick={clickNeutral}/>
      <Button label = {"bad"} handleClick={clickBad}/>
      <Header text = {"statistics"} />
      <Statistics good = {good} neutral = {neutral} bad = {bad} clicked={clicked}/>
    </div>
  )
}

export default App