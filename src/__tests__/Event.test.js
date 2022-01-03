import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

    let EventWrapper;
    let event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });

    test('render summary', () => {
      expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render location', () => {
      expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render startDatetime', () => {
      expect(EventWrapper.find('.startDatetime')).toHaveLength(1);
    });

    test('render startTimezone', () => {
      expect(EventWrapper.find('.startTimezone')).toHaveLength(1);
    });

    test('render description', () => {
      expect(EventWrapper.find('.description')).toHaveLength(1);
    });

    test('render details button', () => {
        expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
      });

    test('open details section via onClick on details button', () => {
        EventWrapper.find('.detailsButton').at(0).simulate('click');
        expect(EventWrapper.state('detailsShown')).toBe(true);
    });
});