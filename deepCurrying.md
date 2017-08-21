# Deep Curring

- notice name is the last argument here.
- curring limits us to working with one argument at a time.
```javascript
function greet(greeting, separator, emphasis, name){
  return (greeting + separator + name + emphasis)
}

const result = greet('hello', ', ', '!', 'jon')
console.log(result);
```