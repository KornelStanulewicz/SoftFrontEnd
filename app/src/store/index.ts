import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { recuders, initalStoreState, StoreState, StoreActionType } from "./store";


const store = createStore<StoreState, StoreActionType, any, any>
    (recuders, initalStoreState, composeWithDevTools());
    
export default store;