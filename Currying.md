# Currying
* way to consolidate functionality of multiple functions that may share similar
  code but have different arguments.

```javascript
function greet(greeting, name){
  return (`${greeting} ${name}`)
}

console.log(greet('hello', 'jon'));
console.log(greet('hello', 'eddy'));
console.log(greet('hello', 'brian'));

// A greet function
// this is how the code is normally written, but this is repetitive.

// Idea 1
// May be we can hard code the repetitive bit i.e. 'hello'
function greetHello(name){
  return (`Hello, ${name}`);
}

console.log(greetHello('jon'));
console.log(greetHello('eddy'));
console.log(greetHello('brian'));
// This has its limitations
```

### with currying we can use independent functions that
* take simple args
* are customizable 
* all share same template code
```javascript
//Currying the greet function
function greetCurried(greeting){
  return function(name){
    if (typeof(greeting) != 'string'){
      return 'Greetings'
    } else if (typeof(name) != 'string'){
      return (greeting);
    }
    return (`${greeting} ${name}`)
  }
}

const greetHello= greetCurried('hello');
console.log(greetHello('Jon'));
//type checked
console.log(greetHello(5));


//Now we can also make GreetHi

const greetHi = greetCurried('Hi');
console.log(greetHi('James'))
```