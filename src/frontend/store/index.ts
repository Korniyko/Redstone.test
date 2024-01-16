import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"
import thunk from 'redux-thunk';
import { categories} from "./reducer";
import createSessionStore from "./createSessionStore";


const initialState = {}

const reducers = combineReducers({
  categories,
  
  
})
const composeEnhancers = (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

  export default () => createSessionStore(reducers, composeEnhancers(applyMiddleware(thunk)));