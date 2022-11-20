import contador from './reducers/contador.js';
import aluno from './reducers/aluno.js';
import aulas from './reducers/aulas.js';

const reducer = Redux.combineReducers({ contador, aluno, aulas });

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;