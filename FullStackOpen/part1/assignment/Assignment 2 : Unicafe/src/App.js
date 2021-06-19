import './App.css';
import React from 'react';
import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Statistic = ({value,sum,text}) => {

  let avValue = value / sum;
  if (sum === 0) return (<p>No one voted</p>);
  const newReturn = 
    <tr> <td> {text} </td><td>{avValue.toPrecision(3)}</td></tr>
  return newReturn;
}
const Statistics = ({good,neutral,bad}) => {
 
  const sum = good + bad + neutral;
  if (sum === 0) return (
    <tr>No Feedbacks</tr>
  )
  return (
    <>
            <Statistic value={good} text="Good Average" sum={sum}/>
           <Statistic value={neutral} text="Neutral Average" sum={sum}/>
           <Statistic value={bad} text="Bad Average" sum={sum}/>
    </>
   
  )
}
const Display = ({ good, neutral, bad }) => {
    
       return (
         <table className="Statistics">
         <tbody>
    <tr><td>good</td><td>{good}</td></tr>
    <tr><td>neutral</td><td>{neutral}</td></tr>
    <tr><td>bad</td><td>{bad}</td></tr>
    <Statistics good={good} bad={bad} neutral={neutral}/>
         </tbody>
         </table>
  )
}
const Header = () => {
  return (
    <div className="Header">
      <h1 className="Company">UniCafe</h1>
      <p className="company-paragraph">Evaluate our products and services</p>
    </div>
  )
}
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodAdd = () => { setGood(good + 1); }
  const neutralAdd = () => { setNeutral(neutral + 1); }
  const badAdd = () => { setBad(bad + 1); }


  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="Buttons" >
          <Button onClick={goodAdd} text="good" />
          <Button onClick={neutralAdd} text="neutral" />
          <Button onClick={badAdd} text="bad" />
        </div>
        <Display good={good} bad={bad} neutral={neutral} />
      </div>

    </div>
  );
}

export default App;
