const Lodash = require('./sync.js')
let _ = new Lodash()
describe('Lodash: compact', () => {

  let array = [false, 42, 0, '', true, null, 'hello']

  beforeEach(() => {   // запуститься перед кожним тестом
    array = [false, 42, 0, '', true, null, 'hello']
  })
  // beforeAll (()=>{}) запуститься один раз перед першим тестом
  //afterEach (()=>{}) // запуститься після кожного теста
  afterAll(() => {// запуститься після всіх тестів
    _ = new Lodash()
  })

  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  // test('should working array be editable', () => {
  //     array.push(...['one', 'two'])
  //     expect(array).toContain('one')
  //     expect(array).toContain('two')
  // })


  test('should remove falsy values from array', () => {
    const result = [42, true, 'hello']
    expect(_.compact(array)).toEqual(result) // tobe для примітивів , а toEqual для обєктів
  })

  test('should NOT contain false value', () => {
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain('')
    expect(_.compact(array)).not.toContain(null)
  })
});
describe('Lodash: groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })

  test('should group array items by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  test('should group array items by lenght', () => {
    const array = ["one", "two", "three"]
    const result = {
      5: ['three'],
      3: ['one', 'two']
    }
    expect(_.groupBy(array, "lenght")).toEqual(result)
  })

  test('should NOT return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })

});
