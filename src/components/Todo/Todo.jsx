import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import styles from './Todo.module.css'

export default function Todo({ todo, onAdd, onUpdate, onDelete, onEdit }) {
    const [todos, setTodos] = useState(() => {
        console.log('savedTodos');
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const { text, status } = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'done' : 'active';
        onUpdate({ ...todo, status });
    };
    const handleDelete = () => onDelete(todo);

    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
    }

    function handleUpdateTodo(id, text) {
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? onUpdate([...updatedItem, todo]) : todo; 
        })
    }
    function handleEditFormSubmit(e) {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
    }
    const handleEdit = () => {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
    }


    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type='checkbox' 
                id='id' 
                checked={status === 'done'}
                onChange={handleChange}
            />
            <label className={styles.text} htmlFor='checkbox'>{text}</label>

                {isEditing ? (
                <form onSubmit={handleEditFormSubmit}>
                    <input 
                        className={styles.input}
                        type='text' 
                        name='editTodo' 
                        placeholder='Edit todo' 
                        value={currentTodo.text}
                        onChange={handleEditInputChange} />
                    <button className={styles.editBtn} onClick={(e) => {
                        console.log(text);
                    }}>✔️</button>
                    <button className={styles.editBtn} onClick={() => setIsEditing(false)}>🔙</button>
                </form>
                ): ''}
        
            <button className={styles.button} onClick={handleEdit}>
                <BsPencil />
            </button>

            <button className={styles.button} onClick={handleDelete}>
                <AiOutlineClose />
            </button>
        </li>
    )
}

