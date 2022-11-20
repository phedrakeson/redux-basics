import contador from './reducers/contador.js';
import aluno from './reducers/aluno.js';
import aulas from './reducers/aulas.js';
import middleware from '../middleware/middleware.js';

const reducer = Redux.combineReducers({ contador, aluno, aulas });

const store = Redux.createStore(
  reducer,
  middleware
);

export default store;