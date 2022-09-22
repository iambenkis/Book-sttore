import { createStore } from "redux";
import rootReducer from "./books";

export const store = createStore (
    rootReducer,
    {}
)