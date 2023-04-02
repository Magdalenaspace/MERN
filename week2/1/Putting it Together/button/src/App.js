
import './App.css';
import People from './components/People';

function App() {
  const people = [
    {
      firstName: "Mary",
      lastName: "Jane",
      age: 28,
      hairColor: "Purple",
    },
    {
      firstName: "Neo",
      lastName: "Anderson",
      age: 38,
      hairColor: "brown",
    },
  ];

  return (
    <div className="App">
      {people.map((person, index) => (
        <div key={index}>
        <People
          key={index}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
        />
        {index !== people.length - 1 && <hr style={{ color: 'hwb(117 2% 22%)' }}/>}
        </div>
      ))}
    </div>
  );
}
export default App;