const greeter = greeting => separator => emphasis => name => {
  return greeting + separator + name + emphasis;
}

const greetAwkwardly = greeter('Hello')('...')('!');
console.log(greetAwkwardly('jon'));

const sayHello = greeter('hello')(', ');
console.log(sayHello('!')('Alan'))