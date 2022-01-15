import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
    draftBook.isbn = "#djdbjdbd748494";
  });
}

const updatedBook = publish(book);

console.log("Original Book", book);
console.log("Updated Book", updatedBook);

const person = {
  name: "Bob",
  address: {
    city: "Galle",
    country: "Sri Lanka",
  },
};

const updatedPerson = produce(person, (draftPerson) => {
  draftPerson.address.city = "Colombo";
});

console.log("Original person", person);
console.log("Updated person", updatedPerson);
