import { BrowserRouter as Router } from 'react-router-dom';
import { Banner } from './components/molecules';
import { Header } from './components/organisms/';
import React, { Component } from 'react';

export class AbzApp extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <Banner />
        </main>
      </Router>
    );
  }
}
