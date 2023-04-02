import React, { useState } from 'react';


const Todo = (props) => {
    const {todos, setTodos} = props;

    const deleteHandler = (deleteIdx) => {
        setTodos(todos.filter((task, idx) => {
            return deleteIdx !== idx;
        }));
    }

    const statusHandler = (idx) => {
        const copiedTodos = [...todos];
        copiedTodos[idx].isDone = !copiedTodos[idx].isDone;

        setTodos(copiedTodos);
    }

    return(
        <div>
            {todos.map((task, idx) => {
                const styleIsh = {
                    display: "inline-block"
                };

                if (task.isDone) {
                    styleIsh.textDecoration = "line-through";
                }
                return(
                    <div key={idx}>
                        <p style={styleIsh}>{task.name}</p>
                        <input onChange={(e) => {statusHandler(idx);}} type="checkbox" checked={task.isDone} />
                        <button onClick={(e) => {deleteHandler(idx);}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Todo;