# Recursion
* calling function from within itself
* alternative to looping
* stateless
* no side effects
* checks for terminal condition first, allow a quick and clean exit
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

### Things to consider:
* Can have high memory price
* To optimize you might need tail-call optimization
* code can be difficult to read

```javascript
const factorialPTC = number => factorIt(number, 1);

const factorIt = (number, acc) => {
  if (number<=1){
    return acc
  } else {
    return factorIt(number - 1, number*acc);
  }
}

const result = factorialPTC(6)
console.log(result);
```