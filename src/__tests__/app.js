import { Validator } from '../js/app.js';

test('correct value', () => {
  const result = Validator.validateUsername('A33aa');
  expect(result).toBe(true);
});
test('correct value', () => {
  const result = Validator.validateUsername('A33a-a');
  expect(result).toBe(true);
});
test('correct value', () => {
  const result = Validator.validateUsername('l--2-2-2-a22a');
  expect(result).toBe(true);
});
test('uncorrect value', () => {
  const result = Validator.validateUsername('7A333aa');
  expect(result).toBe(false);
});
test('uncorrect value', () => {
  const result = Validator.validateUsername('_A33aa');
  expect(result).toBe(false);
});
test('uncorrect value', () => {
  const result = Validator.validateUsername('A333aa');
  expect(result).toBe(false);
});
test('uncorrect value', () => {
  const result = Validator.validateUsername('sdf9');
  expect(result).toBe(false);
});
