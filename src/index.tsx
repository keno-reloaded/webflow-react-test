import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, dark, light } from '@amboss/design-system';
import App from './App';
import './styles/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider theme={light}>
    <App />
  </ThemeProvider>
);
