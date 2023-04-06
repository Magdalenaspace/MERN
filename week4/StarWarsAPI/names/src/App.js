import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/') //?page=2 from next field
    .then((response) => {
      console.log('RESPONSE');
      // console.log(response.data.results);
      // get the array
      setPeople(response.data.results);
      
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div className="App">
      <h1>NAMES</h1>
      {
          people.map((char, idx) => (
            <div key = {idx}>
              <p>
                Name: {char.name}
              </p>
            </div>
          ))
      }
    </div>
  );
}

export default App;

//! 2nd opt deal with promises in async way
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await axios.get('https://swapi.dev/api/people/');
//       setPeople(response.data.results);
//     } 
//     catch (err) {
//       console.log(err);
//     }
//   }
//   fetchData();
// }, [])
