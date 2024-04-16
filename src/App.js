import React, { useState } from 'react';
import './App.css';

function App() {
        const [todos, setTodos] = useState([]);
        const [inputValue, setInputValue] = useState('');

        const handleInputChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleAddTodo = () => {
            if (inputValue.trim() !== '') {
                const newTodo = {
                    id: Date.now(),
                    text: inputValue,
                    completed: false,
                };
                setTodos([...todos, newTodo]);
                setInputValue('');
            }
        };

        const handleToggleTodo = (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                )
            );
        };

        const handleDeleteTodo = (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        };

        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                }}
                onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter todo..."
                    />
                    <button onClick={handleAddTodo}>Add Todo</button>
                </div>
            </div>
        );
    }

export default App;
