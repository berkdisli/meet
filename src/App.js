import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    infoText: ''
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        currentLocation: location
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount,
      infoText: ''
    });
    this.updateEvents(currentLocation, eventCount);
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <div>
          {!navigator.onLine ? (<WarningAlert text='You are offline! The displayed data might not be up to date.' />) : (<WarningAlert text=' ' />)}
        </div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventCount={this.updateEventCount} />
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}>
          <CartesianGrid fill='#fff' />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="" data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;