import React, { useState,useEffect } from 'react';
import './App.css';
import Note from './Components/Note'
import axios from 'axios'


const App = (props)=>{
  const [notes,setNotes] = useState([]); 
  const [newNote, setNewNote] = useState('a new note ...'); 
  const [showAll, setShowAll] = useState(true);

    useEffect( ()=>
        {
            console.log('effect') ; 
            axios
                .get('http://localhost:3001/notes')
                .then(response=>
                    {
                    console.log('promise Fullfilled');
                    setNotes(response.data);
                    })
        },[]);
    console.log('render',notes.length,'notes');

  
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
setNotes(notes.concat(noteObject))
    setNewNote('');
  }
  
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  }
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important);
  

  return (
   <div className="App">
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
       show {showAll?'important':'all'} 
        </button>
    </div>
      <ul>
          {notesToShow.map(note=> 
          <Note key={note.id} note={note}/>
          )}
      </ul>
    
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange}/>
       <button type="submit" >Save </button> 
      </form>
    </div>
  );
}

export default App;
