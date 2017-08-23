const compose = (f1, f2) => {
  return value => {
    return f1(f2(value));
  }
}

const addOne = x => x + 1;
const timesTwo = x * 2;

