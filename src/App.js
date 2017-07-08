import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Layout from './layout'
import './app.css';
import WebpackIcon from './assets/images/webpack.svg';

class App extends Component {
  render() {
    return (
        <Router>
          <Layout>
            <h1>React App with Webpack</h1>
            <img height="100" height="100" src={WebpackIcon} />
            <div className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="background-svg"></div>
          </Layout>
        </Router>
    )
  }
}

export default App;
