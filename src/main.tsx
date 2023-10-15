import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import IbgeProvider from './context/IbgeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <IbgeProvider>
    <App />
  </IbgeProvider>,
);
