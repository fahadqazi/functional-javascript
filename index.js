const firstFn = (original, replacement) => {
  return function(source){
    return source.replace(original, replacement);
  };
};

const term = firstFn(/black/ig, 'white');

console.log(term('The color is black'));