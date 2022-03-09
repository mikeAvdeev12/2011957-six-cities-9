import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const props = {
  RENT_COUNT: 43,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentCount = {props.RENT_COUNT}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
