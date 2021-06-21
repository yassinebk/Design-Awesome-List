import './App.css';
import React, { useState,useEffect }from 'react';
import Numbers from "./components/Numbers"
import Form from "./components/Form"
import axios from "axios"




function App() {
  const [person, setPerson] = useState([ ])
  const [displayedList,setDisplayed] = useState(person)
  const [newName, setNewName] = useState('');

    useEffect(()=>
        {
            axios.get("http://localhost:3001/persons")
            .then(response=>
                {
                    console.log(response.data);
                    setPerson(response.data); 
                    setDisplayed(response.data);
                })
        },[])


  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearch] = useState(''); 
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  }

   
const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const newPersonSubmit = (event) => {
    event.preventDefault()
    let exists = 0;
    for (let i = 0; i < person.length; i++) { if (newName === person[i].name) exists = 1; }
    if (exists) alert(`${newName} is already added to the phonebook`)
    else setPerson(person.concat({ name: newName,number:newNumber }));
    setNewName('');
    setNewNumber('');
  }
  
  const searchFor = (event) => {
   
    setSearch(event.target.value);
    const newDisplay = person.filter((element) => element.name.toUpperCase().indexOf(searchValue.toUpperCase()) === 0);
    setSearch(event.target.value);
    console.log(newDisplay);
    setDisplayed(newDisplay);

  }

  return (
    <div className="App">
    <h2>Phonebook</h2>
    
    <div className="searchBar">
          <label for="search">Search</label> <input id="search" type="input/text" value={searchValue} onChange={searchFor}/>
</div>
      <Form handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber} newPersonSubmit={newPersonSubmit}/>
         <Numbers person={displayedList}/>
        </div>
  );
}


export default App;
