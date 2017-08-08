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