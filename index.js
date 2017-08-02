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