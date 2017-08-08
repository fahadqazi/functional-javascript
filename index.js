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