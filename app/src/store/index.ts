import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initalStoreState, recuders, StoreActionType, StoreState } from "./store";

const store = createStore<StoreState, StoreActionType, any, any>
    (recuders, initalStoreState, composeWithDevTools());

export default store;