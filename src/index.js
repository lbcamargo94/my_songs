import React from 'react';
import ReactDOM from 'react-dom/client';

// import Aplication
import App from './App';

// import Provider
import { TunesProvider } from './utils/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TunesProvider >
    <App />
  </TunesProvider>
);
