import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default () => {


    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
            .then(res => {
                setAllPets(res.data);
            })
            .catch(err => console.log("Error: ", err))
    }, []);

    return (
        allPets ?
            <div>
                <h1>These Pets Are Looking For Families!</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPets.map((pet) => (
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                                            <button><Link to={`/onePet/${pet._id}`}>Details</Link></button>
                                            <button><Link to={`/editPet/${pet._id}`}>Edit</Link></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> :
        <h1>Loading....</h1>
    )
}
