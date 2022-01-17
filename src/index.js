/**
 * Using redux default store
 */
import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(userAdded({ name: "John Doe" }));
store.dispatch(userAdded({ name: "Mark Doe" }));
store.dispatch(userAdded({ name: "Jessy Doe" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugAssignedToUser({ bugId: 2, userId: 2 }));
store.dispatch(bugAssignedToUser({ bugId: 3, userId: 3 }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(projectAdded({ name: "Project 1" }));

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// console.log("Unresolved bugs:", unresolvedBugs);

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

console.log(x === y);

const assignedBugs = getBugsByUser(store.getState(), 3);
console.log(assignedBugs);

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
