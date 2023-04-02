import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react'

// 1. WHAT METHOD ARE WE GOING TO USE TO MAKE MULTIPLE CARDS APPEAR?
// 2. WHAT KIND OF DATA WILL ALLOW US TO USE THAT METHOD?
// 3. WHAT MIGHT OUR COMPONENTS NEED FROM OUR APP TO ACCOMPLISH THE TASK?
// 4. DO WE NEED TO LIFT STATE?


function App() {

  const [pokemonCard, setPokemonCard] = useState([])

  return (
    <div className="App">
      <Form pokemonCard = {pokemonCard} setPokemonCard = {setPokemonCard}/>
      <Display pokemonCard={pokemonCard} setPokemonCard = {setPokemonCard}/>
    </div>
  );
}

export default App;
