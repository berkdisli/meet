import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: ''
  }

  toggleAmountOfEvents = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        numberOfEvents: number,
        infoText: 'Please select a number between 1 - 32!'
      });
    }
    else {
      this.setState({
        numberOfEvents: number,
        infoText: ''
      });
      this.props.updateEventCount(event.target.value);

    }
  };


  render() {
    return (
      <div style={{ textAlign: '-webkit-center' }}>
        <div className="numberOfEvents">
          <h5>Choose the number of events you want to see, from currently 32: </h5>
          <input
            type="number"
            className="amountEventsOnePage"
            value={this.state.numberOfEvents}
            onChange={this.toggleAmountOfEvents}
          />
          <p className="error-text">{this.state.infoText}</p>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;