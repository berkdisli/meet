import React, { Component } from "react";

class Event extends Component {
  state = {
    detailsShown: false
  }

  showDetails = () => {
    this.setState ({
      detailsShown : true
    })
  }

  render() {
      const { event } = this.props;

      const hide = {display : 'none'};
      const show = {display : 'grid'};

      return (
        <ul className="Event">
          <button className="detailsButton" onClick={this.showDetails}>
            See Details</button>
          <div className="eventDetails">
            {this.state.detailsShown === false? hide : show }
            <li className="summary">
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
            <li className="description">
              {event.description}
            </li>
          </div>
        </ul>
      );
    }
}

export default Event;