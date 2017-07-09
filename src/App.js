import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Layout from './layout';
import './app.css';
import WebpackIcon from './assets/images/webpack.svg';

const App = () => (
  <Router>
    <Layout>
      <h1>React App with Webpack</h1>
      <img alt="" height="100" width="100" src={WebpackIcon} />
      <div className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
      <div className="background-svg" />
    </Layout>
  </Router>
);

export default App;
