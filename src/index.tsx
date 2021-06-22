import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

import './styles/index.scss';
import styles from './styles/dev.module.scss';

const viewport = document.body;
const appId = process.env.REACT_APP_ID;
const isDev = process.env.NODE_ENV === 'development';

if (viewport) {
  let root = viewport.querySelector(`#${appId}`);

  if (!root) {
    root = document.createElement('div');
    root.id = appId || '';
    root.attachShadow({ mode: 'open' });
  }

  if (!root.shadowRoot) {
    viewport.appendChild(root);
  }

  const app = document.createElement('div');

  if (isDev) {
    app.classList.add(styles.body);
  }

  root.shadowRoot?.prepend(app);
  ReactDOM.render(<App />, app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
