# Composition
- Nesting
- Order of nesting matters
- Nesting has no limits

Rules: 
* Each nested function should be small and pure
* Should pass return values
* Respect order
```javascript
const addOne = x => x + 1;
const timesTwo = x => x * 2;

console.log(addOne(timesTwo(3)))  //7
console.log(timesTwo(addOne(3)))  //8

```

## Manual Composition
- Create a new function that behaves like a set of nested functions
```javascript
//Frist way
const addOne = x => x + 1;
const timesTwo = x => x * 2;

const addOneTimesTwo = x => {
  var holder = x;
  holder = addOne(holder);
  holder = timesTwo(holder);
  return holder;
}

console.log(addOneTimesTwo(3));

//Second way
const addOne = x => x + 1;
const timesTwo = x => x * 2;
const addOneTimesTwo = x => addOne(timesTwo(x))
console.log(addOneTimesTwo(3));
```

## Creating a compose utility
- functions should be pure
```javascript
const compose = (f1, f2) => {
  return value => {
    return f1(f2(value));
  }
}
//OR

const compose = (f1,f2) => value => f1(f2(value));

const addOne = x => x + 1;
const timesTwo = x => x * 2;

const result = compose(addOne, timesTwo)(4);
console.log(result);
```