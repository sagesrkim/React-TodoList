import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
    const { text, status } = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'done' : 'active';
        onUpdate({...todo, status });
    };
    const handleDelete = () => onDelete(todo);
    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type='checkbox' 
                id='checkbox' 
                checked={status === 'done'}
                onChange={handleChange}
            />
            <label className={styles.text} htmlFor='checkbox'>{text}</label>
            <button className={styles.button} onClick={handleDelete}>
                <AiOutlineClose />
            </button>
        </li>
    )
}

