import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
   beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
  });

  test('render textBox', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('return amount of events, when amount is changed manually', () => {
    NumberOfEventsWrapper.setState({
        manualAmountEvents: 2
    })
    const eventObject = { target: {value: 1}};
    NumberOfEventsWrapper.find('.amountEventsOnePage').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('manualAmountEvents')).toBe(1);
  });

});