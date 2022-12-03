import {formatDate, getAverage, getOptionCount} from '../../src/helper/utils';

describe('test date format', () => {
  it('Should return date in yyyy-mm-dd format', () => {
    const isoDateString = '2017-06-09T10:10:00.000Z';
    expect(formatDate(isoDateString)).toBe('2017-06-09');
  });
  it('Should return empty string', () => {
    const isoDateString = '';
    expect(formatDate(isoDateString)).toBe('');
  });
  it('Should return null', () => {
    const isoDateString = null;
    expect(formatDate(isoDateString)).toBe('');
  });
});

describe('get average of number array', () => {
  it('Should return the average of given number array', () => {
    const numArray = [1, 2, 3, 4, 5, 6, 7];
    expect(getAverage(numArray)).toBe(4);
  });
  it('Should return 0 for empty array', () => {
    const numArray = [];
    expect(getAverage(numArray)).toBe(0);
  });
  it('Should return 0 when array is null', () => {
    const numArray = null;
    expect(getAverage(numArray)).toBe(0);
  });
});

describe('get getOptionCount', () => {
  it('Should return ', () => {
    const answerArray = [
      [true, false, false],
      [true, true, true],
      [false, false, false],
    ];
    const optionIndex = 0;
    expect(getOptionCount(answerArray, optionIndex)).toBe(2);
  });
});
