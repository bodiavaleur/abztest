import { BrowserRouter as Router } from 'react-router-dom';
import {
  Banner,
  Relationships,
  AboutMe,
  Requirements,
  Users
} from './components/molecules';
import { Header, Signup } from './components/organisms/';
import React, { Component } from 'react';

export class AbzApp extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <Banner />
          <AboutMe />
          <Relationships />
          <Requirements />
          <Users />
          <Signup />
        </main>
      </Router>
    );
  }
}
