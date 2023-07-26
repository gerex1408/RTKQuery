import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import App from './App';

import { api } from './services/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
