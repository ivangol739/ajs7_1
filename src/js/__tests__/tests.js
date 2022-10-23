import Validator from '../App';

test.each([
  ['abu123_gis', true],
  ['123abugis_', false],
  ['abu_gis', true],
  ['-abugis', false],
  ['-abugis123', false],
  ['abu-gis', true],
])('basic test', (nickname, result) => {
  const n = new Validator(nickname);
  expect(n.validateUsername()).toBe(result);
});
