import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import TodoContextProvider from './store/TodoContextProvider';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
