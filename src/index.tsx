import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ReportContainer } from './containers/report/Report.container';
import './index.css';
import './assets/style.global.scss';

ReactDOM.render(
  <React.StrictMode>
    <ReportContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
