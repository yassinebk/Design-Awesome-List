import React from 'react'
import "./Numbers.css"



const Numbers = (props) => {
    
    return (
        <div>
            <h2>Numbers</h2>
        <ul>
            {
                    props.person.map
                        (
                    (person) => {
                        return (<li key={person.name}>
                        {person.name+"   :::    "+ person.number}
                    </li>)
            
                    }
            )
            }
        </ul>
        </div>
    )
}

export default Numbers;