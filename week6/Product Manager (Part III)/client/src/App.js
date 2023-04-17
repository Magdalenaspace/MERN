import './App.css';
import MainAll from './views/MainAll';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import FormComponent from './components/FormComponent';
import UpdateComponent from './components/UpdateComponent';
import DetailComponent from './components/DetailComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav><Nav/></nav>
      <Routes>
      <Route path='/' element={<MainAll/>}/>
      <Route path='/createProduct/form' element={<FormComponent/>}/>
      <Route path='/editProduct/:id' element={<UpdateComponent/>}/>
      <Route path='oneProduct/:id' element={<DetailComponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
