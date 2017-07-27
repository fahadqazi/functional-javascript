# Different way to write JS code to handle a button press
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
