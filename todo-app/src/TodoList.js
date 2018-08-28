import React from 'react';
import { Todo } from './Todo'

export function TodoList (props) {
    const list = props.todoList.map((todo) => (
        <li>
            {(new Todo(todo)).render()}
        </li>
    ));

    return (
        <ul>
            {list}
        </ul>
    );
}