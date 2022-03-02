import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const props = {
  RENT_COUNT: 43,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentCount = {props.RENT_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
