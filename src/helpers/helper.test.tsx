import { cleanup } from '@testing-library/react';
import { dateWithTimeFormater, dateFormater, dateHasExpired, vehicleMsg } from './helper';
import { msgConstants as msg } from './constants';

describe('test Date and time function', () => {
  afterEach(cleanup);

  it('dateWithTimeFormater should format the date and time in am, YYYY/MM/DD - HH:MM am', () => {
    expect(dateWithTimeFormater('2022-07-01T00:00:00')).toEqual('2022/07/01 12:00 am');
  });

  it('dateWithTimeFormater should format the date and time in pm, YYYY/MM/DD - HH:MM pm', () => {
    expect(dateWithTimeFormater('2022-07-01T13:00:00')).toEqual('2022/07/01 1:00 pm');
  });

  it('dateFormater should format the date in YYYY/MM/DD', () => {
    expect(dateFormater('2022-07-01T00:00:00')).toEqual('2022/07/01');
  });

  it('dateHasExpire should render the right html', () => {
    const sampleDateNotExpired = '2026/07/01';
    const sampleDateHasExpired = '2021/07/01';
    expect(dateHasExpired(sampleDateNotExpired)).toBe(false);
    expect(dateHasExpired(sampleDateHasExpired)).toBe(true);
  });
});

describe('test vehicleMsg function', () => {
  test.each`
    type                          | expected
    ${'Out of Service'}           | ${msg.unavailableMsg}
    ${'Retired'}                  | ${msg.retiredMsg}
    ${'Certificate Expired'}      | ${msg.expiredMsg}
    ${'Not Certified'}            | ${msg.notCertifiedUserMsg}
    ${'AuthorizationFailedAgain'} | ${msg.authorizationFailedAgain}
    ${''}                         | ${''}
  `('returns $expected when type=$type', ({ type, expected }) => {
    expect(vehicleMsg(type)).toEqual(expected);
  });
});
