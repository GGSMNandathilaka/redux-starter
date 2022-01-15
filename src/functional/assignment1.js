import { pipe } from "lodash/fp";

// assignment 1
const input = { tag: "JAVASCRIPT" };

const toLowerCase = (str) => str.toLowerCase();
const wrapInParanthesis = (str) => `"(${str})"`;
const getObject = (param) => (obj) => obj[param];

const output = pipe(getObject("tag"), toLowerCase, wrapInParanthesis);

console.log(output(input));
