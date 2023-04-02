import './App.css';
import Form from './components/Form';
import MoreForm from './components/MoreForm';

function App() {
    return (
    <div className="App">

        {/* Assignment More Form  */}
        <MoreForm/>

        <hr style={{ borderBottom: "4px solid purple" }} />

        {/* Assignment Hook Form */}
        <Form/>

    </div>
);
}

export default App;
