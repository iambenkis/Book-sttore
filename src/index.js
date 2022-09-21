
import reportWebVitals from './reportWebVitals';
import React from 'react'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import rootReducer from './redux/configureStore';

const store = createStore(rootReducer)
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

reportWebVitals();
