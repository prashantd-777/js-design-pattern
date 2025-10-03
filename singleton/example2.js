let countInstance = null;
let counter = 0;
class Counter {
  constructor() {
    if (!countInstance) {
      countInstance = this;
    }
  }

  getInstance() {
    return countInstance;
  }

  getCount() {
    return counter;
  }

  incrementCount() {
    counter++;
    return counter;
  }

  decrementCount() {
    counter--;
    return counter;
  }

  setCount(newCounter) {
    counter = newCounter;
  }
}

const singleCounter = Object.freeze(new Counter());

singleCounter.incrementCount();
singleCounter.incrementCount();

console.log(singleCounter.getCount());

export default singleCounter;
