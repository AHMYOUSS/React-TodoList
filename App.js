import React, {useState} from 'react';

import TodoForm from './components/TodoForm';

import './App.css'
import TodoList from './components/TodoList';

function App_() {
    const [todos , setTodos]= useState([]);

    const addTodo =(todo)=>{
        setTodos([todo, ...todos])
    }
    
    return (
        <div className="App" >
            <header className="App-header"> 
                 <p> React Todo</p>
           <TodoForm addTodo={addTodo} />
           <TodoList todos={todos} />
            </header>
          
        </div>
    )
}

export default App_
