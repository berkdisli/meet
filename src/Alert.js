import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            height: '30px',
            width: this.width,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgba(94, 88, 7, 0.842)';
        this.width = 'max-content';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgba(109, 11, 11, 0.842)';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#c5bc63'
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };
