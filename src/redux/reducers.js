import {
  OPEN_MENU,
  CLOSE_MENU,
  LOAD_USERS,
  SET_CURRENT_USER,
  SET_TOKEN
} from './actions';

const initialState = {
  isMenuOpen: false,
  users: [],
  currentUser: [],
  token: ''
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MENU:
      return { ...state, isMenuOpen: payload };

    case CLOSE_MENU:
      return { ...state, isMenuOpen: payload };

    case LOAD_USERS:
      return { ...state, users: state.users.concat(payload) };

    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    case SET_TOKEN:
      return { ...state, token: payload };

    default:
      return state;
  }
};
