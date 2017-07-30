# Different ways to write JS code to handle a button press
```html
<!DOCTYPE html>
  <head>
    <title></title>
  </head>
  <body>
      <button id="main_button">Capitalize!!</button>
      <script src="./index.js"></script>
  </body>
</html>
```
> ## Imperative way
* interdependant functions getText & capWords
* values being passed around and redefined
* js and dom code mixed
* possible globally defined functions
```javascript
function getText() {
  var someText = prompt('Give me a string to capitalize');
  var result = capWords(someText);
  console.log(result);
  alert(result.join(' '));
}

function capWords(input) {
  var inputArray = input.split(' ');
  var counter;
  var transform = '';
  var outputArray = []
  for (counter = 0; counter < inputArray.length; counter++) {
    transform = [
      inputArray[counter].charAt(0).toUpperCase(),
      inputArray[counter].substr(1)
    ].join('');
    outputArray.push(transform);
  }
  console.log(outputArray);
  return outputArray;
}

document.getElementById('main_button').onclick = getText;
```


> ## Object Oriented Way
* data to be treated as objects
* methods to manipulate those objects
* message passing
* hiding and sharing props
* composition, inheritance ..
* code encapsulation

possible issues:
  - reliance on `this`
  - using extra variables for counters
  - loop modifying variables outside itself
```javascript
(function(){
  "user strict";
  var SomeText = function(text){
    this.text = text;
  };

  SomeText.prototype.capify = function(str){
    var firstLetter = str.charAt(0);
    var remainder = str.substr(1);
    return [firstLetter.toUpperCase(), remainder].join('');
  };

  SomeText.prototype.capifyWords = function(){
    var result = [];
    var textArray = this.text.split(' ');
    for (var counter = 0; counter < textArray.length; counter++){
      result.push(this.capify(textArray[counter]));
    }
    return result.join(' ');
  };

  document.getElementById('main_button').addEventListener('click', function(e){
    var something = prompt('Give me a string to capitalize');
    var newText = new SomeText(something);
    alert(newText.capifyWords());
  })
}());
```

> ## Functional Style - 2014
* use functions as first class objects
* don't change external state
* functions are self contained, and no abstract object is being passed around
* functions take a value, process it and return it
* this code is easier to unit test
```javascript
(function(){
  function capify(str){
    return [str.charAt(0).toUpperCase(), str.substr(1)].join('');
  };
  function processWords(fn, str){
    return str.split(' ').map(fn).join(' ');
  };
  function getValue(e){
    var something = prompt('Give me something to capitalize');
    alert(processWords(capify, something));
  };

  document.getElementById('main_button').addEventListener('click', getValue);
}());
```

> ## Functional programming - ES6
* concise code
* no mutable variables, no vars etc
* implied returns values
```javascript
{
  "user strict";
  const capify = str => [str.charAt(0).toUpperCase(), str.substr(1)].join('');
  const processWords = (fn, str) => str.split(' ').map(fn).join(' ');
  const getValue = (e) => alert(processWords(capify, prompt('give me something to capitalize')))
  document.getElementById('main_button').addEventListener('click', getValue);
}
```

> ## Pure functions
* don't rely on state of the code where they are called form
* don't create side effects
* same result for the same arguments given to a pure function
* easy to test
```javascript
const external = [1, 2, 3];
const pure = (value, arr) => {
  let result = value + arr.length;
  return result;
}
console.log(pure(4, external));   //7
console.log(pure(4, external));   //7
```

> ## Higher order functions
* type of functions is Objects
* they can be passed into functions and returned from functions.
```javascript
Example
const timer = setInterval(
  () => console.log(new Date().toLocaleTimeString()),
  1000
);
setTimeout(() => clearInterval(timer), 3000)

---

const logTime = () => console.log(new Date().toLocaleTimeString());
const timer = setInterval(logTime, 1000);
setTimeout(() => clearInterval(timer), 3000);
```