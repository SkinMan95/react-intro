import React from 'react';
import { Todo } from './Todo'

export function TodoList (props) {
    const list = props.todoList.map((todo) => (
        <li>
            <Todo text={todo.text} />
        </li>
    ));

    return (
        <ul>
            {list}
        </ul>
    );
}