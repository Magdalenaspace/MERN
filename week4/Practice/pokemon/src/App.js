import {Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Nav from './component/Nav';
import Form from './component/Form';
import Pokemon from './component/Pokemon'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav className='Nav'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon' element={<Pokemon/>}/>
        <Route path='/pokemon/:pokeName' element={<Pokemon/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
