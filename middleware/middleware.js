const { applyMiddleware, compose } = Redux;

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.group(action.type);
  console.log('ACTION', action);
  console.log('PREVIOUS_STATE', store.getState());
  console.log('NEXT_STATE', store.getState());
  console.groupEnd();
  return result;
}

const reduzirMiddleware = (store) => (next) => (action) => {
  if (action.type === 'contador/REDUZIR') {
    window.alert('REDUZIU!!!')
  }
  return next(action);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enchancer = composeEnhancers(applyMiddleware(loggerMiddleware, reduzirMiddleware));

export default enchancer;