import { Map } from "immutable";

const book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

const newBook = publish(book);

console.log(book.toJS());
console.log(newBook.toJS());
