import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      setName(response.data.results) //results
    })
    .catch( (err)=> {
      console.log(err)
    });
  }, [])
  return (
    <div className="App">
    {
      name.map((char, idx) => (
        <div key = {idx}>
          <p>
            Name: {char.name.charAt(0)
                    .toUpperCase() + char.name.slice(1)}
          </p>
        </div>
        ))
      }
    </div>
  );
}

export default App;

// **   if the original name is "john", then char.name.slice(1) would return "ohn". 