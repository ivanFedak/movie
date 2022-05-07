import React from 'react';
import ReactDOM from 'react-dom';
import './sass/_index.scss';
import App from './components/app/App';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector('.wrapper')
);
