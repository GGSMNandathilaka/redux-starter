function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;

// const total = add(1)(5);
const total = add2(2)(6);
console.log(total);
