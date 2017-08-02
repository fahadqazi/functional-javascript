const factorialPTC = number => factorIt(number, 1);

const factorIt = (number, acc) => {
  if (number<=1){
    return acc
  } else {
    return factorIt(number - 1, number*acc);
  }
}

console.log(factorialPTC(5));

//Another example - downward sum of numbers 

const sumPTC = number => sum(number, 0);

const sum = (number, acc) => {
  if(number<1){
    return acc
  }else{
    return sum(number - 1, number + acc)
  }
}

console.log(sumPTC(5));