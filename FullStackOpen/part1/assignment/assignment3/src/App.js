import './App.css';
import { useState } from 'react';
import React from "react";
import { isPropertyAccessExpression, visitNodes } from 'typescript';


const Button = (props)=> {
  return(
    <button onClick={props.ClickHandle}>
   {props.text}
    </button>
  )
}
const MostVoted = ({ points, anecdotes }) => {
  let highestVotedIndex = 0;
  let highestPoints = 0;
  console.log(points.length);
  for (let i = 0; i < points.length; i++)
  {
    if (points[i] > highestPoints) {
      highestVotedIndex = i;
      highestPoints = points[i];
    }
    }
  console.log(points);
  console.log(highestVotedIndex);
  if(highestPoints===0) return (<div className="container"><p>There are no Votes </p> </div>)
  return (
    <div className="container">
      <p style={{ color: "white" ,textTransform:"Uppercase"}}> The highest Voted Anecdote</p>
      <p> {anecdotes[highestVotedIndex]} </p>
         <p style={{color:"rgba(150,50,0,1)"}}>With {points[highestVotedIndex]}  Votes</p>
</div>
  )
}
function App() {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));


  const handleClick = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }
  
  const voteAnecdote = () => {

    const copy = [...points];
    copy[selected]++;
    setPoints(copy);
  }
  return (
    <div className="App">
     <p className="Anecdote"> {anecdotes[selected]}</p>
    <p className="Votes"> Votes:  {points[selected]}</p>
    <div className="btn-container">
      <Button ClickHandle={handleClick} text="Next Anecdote =>"/>
      <Button ClickHandle={voteAnecdote} text="Vote Anecdote"/>
</div>
    <MostVoted  points={points} anecdotes={anecdotes}></MostVoted>
    </div>
  );
}

export default App;

