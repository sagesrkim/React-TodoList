import React, { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'111', text: '떡볶이 먹기', status: 'active'},
        {id:'112', text: '공부하기', status: 'active'},
        {id:'113', text: '운동하기', status: 'active'}]);

    return (
        <section>
            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </section>
    );
}

