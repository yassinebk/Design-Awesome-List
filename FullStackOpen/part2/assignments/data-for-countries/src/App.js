import './App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios"


function App() {
  
  const [data, setData] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [weather,setWeather] = useState({}) ;
    let currData=[]
    let object;
    let api_key = "065d38f7659b471aa1a155852212106";
    console.log("this is the api key",api_key); 

    useEffect(()=>{
        console.log('weather Effect launched'); 
        if(currData.length===1){
       axios .get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=london&aqi=no`)
            .then((response)=>{ 
                console.log(response.data); 
                object  = response.data;
                console.log("here"); 
                setWeather( { 
                    temp_c:response.data.current.temp_c,
                    wind_mph:response.data.current.wind_mph,
                    wind_dir:response.data.current.wind_dir,
                    img_src:response.data.current.condition.icon
                })
                console.log(weather);
            }
            )}}  
)

 useEffect(() => {
    axios 
         .get(`https://restcountries.eu/rest/v2/all`) 
         .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
  },[])

    const showCountry= ( string) => { 
       setNameSearch(string) ;
    }
   
  const displayCountries = () =>
  {
       currData = data.filter(element=>
          element.name.toUpperCase().indexOf(nameSearch.toUpperCase())!==-1)
      
    console.log('currentData',currData); 
    if (currData.length >= 10)
    {
      console.log("more than 10 data search results",currData);
      return (
        <p> Too many queries ,specify another filter</p>
      )
    }
    else if (currData.length>1){
      console.log("less than 10 search results ", currData);
        return(
            <ul>{currData.map((element) => 
                <li key={element.name}>
                <div className="multiple-results"> 
                    <p> {element.name} </p>
                    <button 
                    onClick={()=>showCountry(element.name)}>show</button> 
                    </div></li>)
            }
                   </ul>)
    }
    else if(currData.length===0) return (<p> No Countries found try to search for another country</p>)
    else {
      console.log("One search result",currData);
      return (
        <div className="container">
            <div className="country-info">
        <h1>{currData[0].name}</h1>
                <p > <span style={{fontWeight:"700" ,textDecoration:"underline"}}>Capital:</span> {currData[0].capital}</p>
                <p> <span style={{fontWeight:"700",textDecoration:"underline"}}>Population: </span>{currData[0].population}</p>
        <img src={currData[0].flag}/>

            <h2>Languages</h2>
          {currData[0].languages.map((lang) =>
            <li>{lang.name}</li>)}
            </div>
        <div className="weather-section">
            <h2> Weather in {currData[0].name}</h2>
            <p> Temperature is {weather.temp_c}</p>
            <img src={weather.img_src} style={{width:"100px",height:"50px"}}/>
            <p> wind : {weather.wind_mph } mph  direction {weather.wind_dir}</p>

        </div>
        </div>
      )
    }
    }
  
  const handleChange = (event) => {
    console.log("nameSearch",nameSearch);
    setNameSearch(event.target.value)

  }
  
  return (
    <div className="App">
        <div className="search-bar"> <label for="search-input">Search</label> <input type="input/text" value={nameSearch} onChange={handleChange}/></div>
        <div className="search-results">
    {displayCountries()}
        </div>
     </div>

  );
}

export default App;
