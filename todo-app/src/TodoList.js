import React from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component {
    render() {
        const list = this.props.items.map((todo, i) => (
            <li key={i}>
                <Todo text={todo.text}
                    priority={todo.priority} 
                    dueDate={todo.dueDate} />
            </li>
        ));

        return (
            <ul>
                {list}
            </ul>
        );
    }
}