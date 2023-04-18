import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateForm = (props) => {

    const navigate = useNavigate()

    const [newPet, setNewPet] = useState({
        name: "",
        type: "",
        description: "",
        skills: [""],
        likes: 0
    })

    const [errors, setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newPet', newPet)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    const onChangeHandler = (e) => {
        // setNePet({ ...newPet, [e.target.name]: e.target.value })
        const { name, value } = e.target;
        if (name.startsWith('skill')) {
            const index = parseInt(name.slice(-1)) - 1;
            const skills = [...newPet.skills];
            skills[index] = value;
            setNewPet({ ...newPet, skills });
        } else {
            setNewPet({ ...newPet, [name]: value });
        }
    };


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="left-input-1">Name</label>
                        <input type="text" onChange={onChangeHandler} value={newPet.name} name='name' id="left-input-1" />
                        {
                            errors.name ?
                                <p>{errors.name.message}</p> :
                                null
                        }
                    </div>
                    <div className="col">
                        <label htmlFor="right-input-2">Skill 1:</label>
                        <input type="text" onChange={onChangeHandler} value={newPet.skills[0]} name="skill1"  id="left-input-3"/>                    
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="left-input-2">Description</label>
                        <input type="text" onChange={onChangeHandler} value={newPet.description} name='description' id="left-input-2" />
                        {
                            errors.description ?
                                <p>{errors.description.message}</p> :
                                null
                        }
                    </div>
                    <div className="col">
                        <label htmlFor="right-input-2">Skill 2:</label>
                        <input type="text" onChange={onChangeHandler} value={newPet.skills[1]} name="skill2" id="right-input-1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="right-input-1">Type</label>
                        <input type="text" onChange={onChangeHandler} value={newPet.type} name='type' id="right-input-2" />
                        {
                            errors.type ?
                                <p>{errors.type.message}</p> :
                                null
                        }
                    </div>
                    <div className="col">
                        <label htmlFor="right-input-3">Skill 3:</label>
                        <input type="text" onChange={onChangeHandler} value={newPet.skills[2]} name="skill3" id="right-input-3" />
                    </div>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateForm;