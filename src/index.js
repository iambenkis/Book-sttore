
import reportWebVitals from './reportWebVitals';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import { store } from './redux/store';
import rootReducer from './redux/configureStore';

// const store = createStore(rootReducer)
// const root = createRoot()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals();
