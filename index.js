
function greet(greeting, separator, emphasis, name){
  return (greeting + separator + name + emphasis)
}

const result = greet('hello', ', ', '!', 'jon')
console.log(result);