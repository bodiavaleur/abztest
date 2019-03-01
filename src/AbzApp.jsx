import { BrowserRouter as Router } from 'react-router-dom';
import { Banner } from './components/molecules';
import { Header } from './components/organisms/';
import React, { Component } from 'react';
import { AboutMe } from './components/molecules/AboutMe';

export class AbzApp extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <Banner />
          <AboutMe />
        </main>
      </Router>
    );
  }
}
