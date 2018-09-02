import React from 'react';

export class Todo extends React.Component {
    formatDate(date) {
        // console.log(typeof date, date);
        return new Date(date).toDateString();
    }

    render() {
        return (
            <div>
                <h4>
                    {this.props.text}
                </h4> 
                <p>
                    (priority: {this.props.priority} | due date: {this.formatDate(this.props.dueDate)})
                </p>
            </div>
        );
    }

}