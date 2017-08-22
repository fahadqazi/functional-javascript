const partial = (variadic, ...args) => {
  return (...subargs) => {
    return variadic.apply(this, args.concat(subargs));
  }
}

const adder = (a,b,c,d) => a+b+c+d;

const firstArgs = partial(adder, 1, 2)
const secondArgs = firstArgs(3,4);
console.log(secondArgs);