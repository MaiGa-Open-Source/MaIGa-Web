import React from 'react';

export class ClickExample extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonClick = () => { console.log('this is:', this); }

    render() {
        return (
            <button onClick={this.buttonClick}
            >CLick Button</button>
        );
    }
}