import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";

export default function configureStore(initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(reduxThunk));
};