import orderByProps from '../app';

describe('orderByProps', () => {
  test('returns an array of objects with prop ordered by props', () => {
    const object = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };
    const props = ['name', 'level'];

    const result = orderByProps(object, props);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });
});
