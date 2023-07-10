import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ApiRequest = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const personData = res.data;
          setPersons(personData);
        })
    }, [])
    
  return (
    <div>
        {persons.map((person) => (
            <div key={person.id}>
                <p>{person.name}-{person.website}</p>
            </div>
        ))}
    </div>
  )
}

export default ApiRequest

