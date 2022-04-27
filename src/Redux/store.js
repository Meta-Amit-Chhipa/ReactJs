import { createStore } from "redux";
import CakeReducers from "./Cakes/CakeReducers";

const store=createStore(CakeReducers)

export default store;