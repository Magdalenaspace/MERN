
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Display from './views/Display';
import Nav from './components/Nav';
import CreateForm from './components/CreateForm';
import Detail from './components/Detail';
import EditPet from './components/EditPet';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav><Nav/></nav>
      <Routes>
      <Route path='/' element={<Display/>}/>
      <Route path='/newPet/form' element={<CreateForm/>}/>
      <Route path='/editPet/:id' element={<EditPet/>}/>
      <Route path='onePet/:id' element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
