import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Detail = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [onePet, setOnePet] = useState({
        likes: 0
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
            .then((res) => {
                console.log(res);
                setOnePet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/adoptPet/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const likeHandler = () => {
        const updatedPetLikes = {...onePet,likes: onePet.likes + 1,};
        axios
            .put(`http://localhost:8000/api/editPet/${onePet._id}`, updatedPetLikes)
            .then((res) => {
                setOnePet(updatedPetLikes);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className='pet-container'>
                <h1>Details About: {onePet.name}</h1>
                <button onClick={() => deleteHandler(onePet._id)}>Adopt The Pet</button>
                <hr />
                <h2>Pet Type: {onePet.type}</h2>
                <h2>Pet Description: {onePet.description}</h2>
                <h2>Pet Skills:</h2>
                    {onePet.skills && onePet.skills.map((skill, index) => (
                        <h3 key={index}>{skill}</h3>
                    ))}
                <h2>Likes: {onePet.likes}</h2>
                <br />
                <button className='like' onClick={likeHandler}>Like</button>
            </div>
        </div>
    )
}

export default Detail;