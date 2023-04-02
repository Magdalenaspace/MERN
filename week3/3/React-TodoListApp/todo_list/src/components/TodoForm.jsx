import React, { useState } from 'react';
import Todo from './Todo';


const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState({name: "", isDone: false});

    const changeHandler = (e) => {
        setTask({
            name: e.target.value,
            isDone: false
        });
    };

    const addDo = (e) => {
        e.preventDefault();
        const newTodo = [...todos, task];
        setTodos(newTodo);

        setTask( { name: "", isDone: false } );
    }

    return(
        <div>
            <form onSubmit={ addDo }>
                <input type="text" name="task" onChange={ changeHandler }
                value={ task.name } />
                <button onClick={(e) => {addDo(e);}}>Add</button>
                {/* <input type="submit" value="Add"/>  */}
            </form>
            <Todo todos={ todos } setTodos={ setTodos } />
        </div>
    );
}

export default TodoForm; 