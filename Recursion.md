# Recursion
* calling function from within itself
* alternative to looping

```javascript
Factorial

function recur(num){
  if (num === 1 || num <= 0){
    return 1
  }else{
    return num * recur(num-1);
  }
}

const countdown = value => {
  if(value > 0){
    return value * countdown(value-1);
  } else {
    return value;
  }
}

console.log(recur(4));
console.log(recur(0));
console.log(recur(1));


const factorial = value => {
  if(value <= 0){
    return 1;
  } else {
    return value * factorial(value-1);
  }
}

console.log(factorial(5))

```