import React from 'react';

export class Todo extends React.Component {
    formatDate(date) {
        return date.toDateString();
    }

    render() {
        return (  
            <h2>
                {this.props.text} <br />
                (priority: {this.props.priority} | due date: {this.formatDate(this.props.dueDate)})
            </h2> 
        );
    }

}