const replace = require('../')

test('main', async () => {
  expect(await replace('foo', 'f', () => 'b')).toBe('boo')

  expect(
    await replace('[foo] [bar]', /\[(.*?)\]/g, async (_, p1) => `hi ${p1}`)
  ).toBe('hi foo hi bar')
})
