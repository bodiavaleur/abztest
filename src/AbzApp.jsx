import { BrowserRouter as Router } from 'react-router-dom';
import {
  Banner,
  Relationships,
  AboutMe,
  Requirements,
  Users
} from './components/molecules';
import { Header, Signup, Footer, Menu } from './components/organisms/';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeMenu, openMenu, loadUsers } from './redux/actionCreators';

class AbzApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    if (this.props.isMenuOpen) {
      return this.props.dispatch(closeMenu(false));
    }

    return this.props.dispatch(openMenu(true));
  }

  getUsersData() {
    const page = this.state.page;
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    )
      .then(res => res.json())
      .then(res => this.props.dispatch(loadUsers(res.users)));
    this.setState(() => ({ page: this.state.page + 1 }));
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    return (
      <Router>
        <main>
          <Header clickMenu={() => this.handleMenuClick()} />
          <Menu
            isMenuOpen={this.props.isMenuOpen}
            clickMenu={() => this.handleMenuClick()}
          />
          <Banner />
          <AboutMe />
          <Relationships />
          <Requirements />
          <Users
            users={this.props.users}
            showMore={() => this.getUsersData()}
          />
          <Signup />
          <Footer />
        </main>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.isMenuOpen,
    users: state.users
  };
};

export default connect(mapStateToProps)(AbzApp);
