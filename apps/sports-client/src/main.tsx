import * as ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import './styles.css'
import App from './app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
