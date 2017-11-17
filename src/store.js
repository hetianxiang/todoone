import {createStore,combineReducers,applyMiddleware} from 'redux';
import {reducer as todoReducer} from './todos';
import logger from 'redux-logger'

const reducer = combineReducers({
  todos: todoReducer,
})
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
export default store;