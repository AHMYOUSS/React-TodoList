import React from 'react'

function Todo({ todo}) {
    return (
        <div>
            <input type="checkbox"/>
            <li
            style={{
                color:"white",
                textDecoration: todo.completed ? "line-through":null
            }}
            > {Todo.task} </li>
            <button>X</button>
        </div>
    )
}

export default Todo
