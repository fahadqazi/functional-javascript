# Deep Curring

- notice name is the last argument here.
- curring limits us to working with one argument at a time.(produces a function chain applying one argument at a time)
- partial application can be used here.(use multiple arguments passed in, then returning a function)
```javascript
//Curried Function
function greet(greeting, separator, emphasis, name){
  return (greeting + separator + name + emphasis)
}

const result = greet('hello', ', ', '!', 'jon')
console.log(result);
```

```javascript
//Deeply curried function
function greetDeepCurry (greeting){
  return function(separator){
    return function(emphasis){
      return function(name){
        return (greeting + separator + name + emphasis);
      }
    }
  }
}

var one = greetDeepCurry('hello');
console.log(one);
var two = one(', ');
console.log(two);
var three = two('!');
console.log(three);
var four = three('jon');
console.log(four);
```

```javascript
//ES6
const greeter = greeting => separator => emphasis => name => {
  return greeting + separator + name + emphasis;
}

var one = greeter('hello');
console.log(one);
var two = one(', ');
console.log(two);
var three = two('!');
console.log(three);
var four = three('jon');
console.log(four);
```