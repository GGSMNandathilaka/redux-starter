import { produce } from "immer";

// assignment 2
const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
};

let newReceipe = produce(recipe, (newReceipe) => {
  newReceipe.ingredients.push("cream");
  newReceipe.ingredients.splice(0, 1, "egg white");
});

console.log(newReceipe);
