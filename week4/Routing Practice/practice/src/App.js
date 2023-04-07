import logo from './logo.svg';
import Home from './components/Home';
import Hello from './components/Hello'
import Number from './components/Number';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Link to={'/home'}>Home</Link>
          <hr/>
          <Link to={'/hello'}>Hello</Link>
          <hr/>
          <Link to={'/number'}>Number</Link>
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/hello' element={<Hello/>} />
        <Route path='hello/:word' element={<Hello/>} />
        <Route path="/hello/:word/:color/:bgCol" element={<Hello/>}/>
        <Route path='/number/:id' element={<Number/>} />

        </Routes>
      </div>
  );
}

export default App;
