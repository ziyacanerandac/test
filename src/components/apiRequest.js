import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ApiRequest = () => {
    const [persons, setPersons] = useState([])
   
    const headers = {
        "Content-Type": "application/json"
      };
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`,{headers})
        .then(res => {
            console.log(res);
          const personData = res.results;
          setPersons(personData);
        })
    }, [3000])
    
  return (
    <div>
        {persons.map((s) => (
            <div key={s.id}>
                <p>{s.business_status}-{s.website}</p>
            </div>
        ))}
    </div>
  )
}

export default ApiRequest

