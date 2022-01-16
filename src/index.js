/**
 * Using redux default store
 */
import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));

store.dispatch(projectAdded({ name: "Project 1" }));

console.log(store.getState());

/**
 * Using a custom redux store
 */
// import store from "./customStore";
// import * as actions from "./actions";

// store.subscribe(() => {
//   console.log("Store changed!!", store.getState());
// });

// store.dispatch(actions.bugAdded("Bug 1"));
// console.log(store.getState());
