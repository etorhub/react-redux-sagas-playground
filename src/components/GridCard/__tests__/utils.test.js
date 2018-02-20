// import React from 'react';
// import { shallow } from 'enzyme';
import convertMillistoTimeString from '../utils';

describe('utils.convertMillistoTimeString', () => {
  it('Returns 0 for 0 miliseconds', () => {
    const expected = '0:00';
    const actual = convertMillistoTimeString(0);
    expect(actual).toEqual(expected);
  });
  it('Returns 4:31 for 271347 miliseconds', () => {
    const expected = '4:31';
    const actual = convertMillistoTimeString(271347);
    expect(actual).toEqual(expected);
  });
});
