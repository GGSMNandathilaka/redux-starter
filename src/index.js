/**
 * Using redux default store
 */
// import store from "./store";
// import { bugAdded, bugRemoved, bugResolved } from "./actions";

// // console.log(store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugResolved(1));

// console.log(store.getState());

/**
 * Using a custom redux store
 */
import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store changed!!", store.getState());
});

store.dispatch(actions.bugAdded("Bug 1"));
// console.log(store.getState());
