import dayjs from 'dayjs';
import React from 'react';
import renderer from 'react-test-renderer';
import InputDayJS from '../';

test('render', () => {
  // console.log(dayjs)
  const d = dayjs().set('year', 2018).set('month', 7).set('date', 8).set('hour', 8).set('minute', 8).set('second', 8);
  const component = <InputDayJS dayjs={d} />;
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
