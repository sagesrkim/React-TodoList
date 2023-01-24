import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState([
        {id:'111', text: '떡볶이 먹기', status: 'active'},
        {id:'112', text: '공부하기', status: 'active'},
        {id:'113', text: '운동하기', status: 'active'}]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => 
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t )));
    const handleDelete = (deleted) => setTodos(todos.filter(t => t.id !== deleted.id)); // 삭제하고자 하는 게 아닌 것만 유지

    const filtered = getFilteredItems(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    } 
    return todos.filter(todo => todo.status === filter);
}

