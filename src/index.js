import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import mainReducer from './reducers';

let store = createStore(mainReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );