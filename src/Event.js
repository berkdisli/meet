import React, { Component } from "react";
import './App.css';

class Event extends Component {
  state = {
    detailsShown: false
  }

  showDetails = () => {
    this.setState({
      detailsShown: !this.state.detailsShown
    })
  }

  render() {
    const { event } = this.props;

    // const hide = { display: 'none' };
    // const show = { display: 'grid' };
    return (
      <ul className="event">
        <button className="detailsButton" onClick={this.showDetails}>{this.state.detailsShown ? "Hide Details" : "See Details"}</button>
        <div className="eventDetails">
          {/* {this.state.detailsShown === false ? hide : show} */}
          <li className="summary name">
            {event.summary}
          </li>
          <li className="location">
            {event.location}
          </li>
          <li className="startDatetime">
            {event.start.datetime}
          </li>
          <li className="startTimezone">
            {event.start.timezone}
          </li>
          {this.state.detailsShown &&
            <li className="description">
              {event.description}
            </li>}
        </div>
      </ul>
    );
  }
}

export default Event;