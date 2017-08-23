const compose = (f1, f2) => {
  return value => {
    return f1(f2(value));
  }
}

const addOne = x => x + 1;
const timesTwo = x => x * 2;

const result = compose(addOne, timesTwo)(4);
console.log(result);