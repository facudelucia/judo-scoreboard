import {createStore, applyMiddleware, compose} from "redux"
import appReducer from "../reducer/appReducer"
import thunk from 'redux-thunk'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(thunk))
)