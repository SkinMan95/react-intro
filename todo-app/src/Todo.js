import React from 'react';

export class Todo extends React.Component {
    render() {
        return (  
            <h2>
                {this.props.text}
            </h2> 
        );
    }

}