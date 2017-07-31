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

console.log(recur(4));
console.log(recur(0));
console.log(recur(1));

```