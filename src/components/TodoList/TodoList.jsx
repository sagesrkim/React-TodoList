import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(() => {
        console.log('savedTodos');
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => 
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t )));
    const handleDelete = (deleted) => setTodos(todos.filter(t => t.id !== deleted.id));
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const filtered = getFilteredItems(todos, filter);
    
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        console.log(currentTodo);
    }

    function handleUpdateTodo({ id, todo }) {
        const updated = todos.map((todo) => {
            return todo.id === id ? updated : todo ; 
        })
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        handleUpdate(currentTodo.id, currentTodo);
    }
    
    const handleEdit = (todo) => {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
    }

    return (
        <>
        <section className={styles.container}>
        <div>
            
        </div>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        onAdd={handleAdd}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
        </>
    );
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    } 
    return todos.filter(todo => todo.status === filter);
}

