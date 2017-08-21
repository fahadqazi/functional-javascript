
function greetDeepCurry (greeting){
  return function(separator){
    return function(emphasis){
      return function(name){
        return (greeting + separator + name + emphasis);
      }
    }
  }
}

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