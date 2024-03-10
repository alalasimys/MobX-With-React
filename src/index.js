import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreProvider } from './stores/helpers/store-context';
import { createStore } from './stores/helpers/create-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootStore = createStore();

root.render(
  <StoreProvider value={rootStore}>
    <App />
  </StoreProvider>
);
