// shallow copy
// Object.assign
const person = { name: "John" };
const updatedPerson = Object.assign({}, person, { name: "Bob", age: "30" });
console.log(updatedPerson);

// spread operator
const updatedPerson1 = { ...person, name: "Bob", email: "bob@gmail.com" };
console.log(updatedPerson1);

// Deep copy
const person1 = {
  name: "John",
  address: {
    country: "USA",
    city: "Texas",
  },
};

const updatedPerson = {
  ...person1,
  name: "Bob",
  address: {
    ...person1.address,
    city: "New York",
  },
};

console.log(person1);
