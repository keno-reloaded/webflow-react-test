import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, dark, light } from '@amboss/design-system';
import { App } from './App';
import './styles/App.scss';

// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDarkMode = false;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(

  <ThemeProvider theme={isDarkMode ? dark : light}>
    <App />
  </ThemeProvider>
);
