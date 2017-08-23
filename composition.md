# Composition
- Nesting
- Order of nesting matters
```javascript
const addOne = x => x + 1;
const timesTwo = x => x * 2;

console.log(addOne(timesTwo(3)))  //7
console.log(timesTwo(addOne(3)))  //8

```

