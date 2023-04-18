import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditPet = (props) => {
    const {id} = useParams()

    const navigate = useNavigate()
    const [updatedPet, setUpdatedPet] = useState({
        name: "",
        type: "",
        description: "",
        skills: ["", "", ""],
        likes: 0
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('skill')) {
            const index = parseInt(name.slice(-1)) - 1;
            const skills = [...updatedPet.skills];
            skills[index] = value;
            setUpdatedPet({ ...updatedPet, skills });
        } else {
            setUpdatedPet({ ...updatedPet, [name]: value });
        }
        
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
            .then((res) => {
                console.log(res);
                setUpdatedPet(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[id])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/editPet/${id}`, updatedPet)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h2>Edit {updatedPet.name}</h2>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" onChange={changeHandler} value={updatedPet.name} name='name'/>
                {
                    errors.name?
                    <p>{errors.name.message}</p>:
                    null
                }

                <label>Type</label>
                <input type="text" onChange={changeHandler} value={updatedPet.type} name='type'/>
                {
                    errors.type?
                    <p>{errors.type.message}</p>:
                    null
                }
                <label>Description:</label>
                <input type="text" onChange={changeHandler} value={updatedPet.description} name='description'/>
                {
                    errors.description?
                    <p>{errors.description.message}</p>:
                    null
                }
                <label>Skills</label>
                <input type="text" onChange={changeHandler} value={updatedPet.skills[0]} name="skill1"  />                    
                <label>Skills</label>
                <input type="text" onChange={changeHandler} value={updatedPet.skills[1]} name="skill2"/>
                <label>Skills</label>
                <input type="text" onChange={changeHandler} value={updatedPet.skills[2]} name="skill3"  />
                <br />
                <button>Update</button>
            </form>
        </div>
)}

export default EditPet;