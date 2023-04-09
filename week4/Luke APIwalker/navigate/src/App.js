import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';
import { Routes, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{margin: '2m'}}>
            <Form/>
            <Routes>
              <Route path = '/people/:id' element = {<People/>}/>
              <Route path="/planets/:id"  element = {<Planet/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
