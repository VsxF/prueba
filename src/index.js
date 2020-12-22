import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task1 from './componentes/task1';
import Task2 from './componentes/task2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Task1 />
    <Task2 />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
