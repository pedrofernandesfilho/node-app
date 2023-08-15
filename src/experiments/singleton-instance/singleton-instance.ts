export let instanceD : Date

function instantiate() {
  instanceD = new Date//(2023, 1, 1)
}

instantiate()


class TestClass {
  private value: Number

  constructor(n: Number) {
    this.value = n
    console.log('log class ctor: ', n)
  }

  getNumber() {
    return this.value
  }
}

export let instance = new TestClass(Math.random() * 10)

export function getInstance() {
  return new TestClass(Math.random() * 10)
}
