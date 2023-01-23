import life from '../legend';

test('show healthy', () => {
  const result = life({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('show wounded', () => {
  const result = life({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('show critical', () => {
  const result = life({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
