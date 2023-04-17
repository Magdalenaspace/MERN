import './App.css';
import axios from 'axios';
import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import OneProduct from './components/OneProduct';
import CreateProduct from './components/CreateProduct';
import DisplayProduct from './components/DisplayProduct';


function App() {
  const [productList, setProductsList] = useState([]);

  return (
    <div className="App">
    <BrowserRouter>
    <h1>Product Manager</h1>
    <br />
    <Link to={'/'}>Home</Link>
    <Routes>
          <Route path='/' element={<DisplayProduct productList={productList} setProductsList={setProductsList}/>}/>
          <Route path='/create/product' element={<CreateProduct/>}/> 
          <Route path='/view/:id' element={<OneProduct/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
