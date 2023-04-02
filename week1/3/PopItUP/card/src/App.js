import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
      <div className="App">
          <PersonCard firstName={"Samuel"} //we use costume tags
          age={32} hairColor={"brown"} />

          <PersonCard firstName={"Jane"} 
          lastName={"Smith"} 
          age={27} hairColor="purple" />

          <PersonCard firstName={"Bob"} 
          lastName={"John"} 
          age={45} hairColor={"blue"}/>
      </div>
  );
}

export default App;
