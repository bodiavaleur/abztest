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
import {
  closeMenu,
  openMenu,
  loadUsers,
  setCurrentUser,
  setToken
} from './redux/actionCreators';
import { getAllUsers, getCurrentUser, getToken } from './utils';

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

  fetchAllUsersData() {
    const page = this.state.page;
    getAllUsers(page, data => this.props.dispatch(loadUsers(data)));
    return this.setState(() => ({ page: this.state.page + 1 }));
  }

  componentDidMount() {
    this.fetchAllUsersData();
    getCurrentUser(1, data => this.props.dispatch(setCurrentUser(data)));
    getToken(token => this.props.dispatch(setToken(token)));
  }

  render() {
    return (
      <Router>
        <main>
          <Header
            user={this.props.currentUser}
            clickMenu={() => this.handleMenuClick()}
          />
          <Menu
            user={this.props.currentUser}
            isMenuOpen={this.props.isMenuOpen}
            clickMenu={() => this.handleMenuClick()}
          />
          <Banner />
          <AboutMe />
          <Relationships />
          <Requirements />
          <Users
            users={this.props.users}
            showMore={() => this.fetchAllUsersData()}
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
    users: state.users,
    currentUser: state.currentUser,
    token: state.token
  };
};

export default connect(mapStateToProps)(AbzApp);
