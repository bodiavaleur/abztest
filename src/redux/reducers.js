import { OPEN_MENU, CLOSE_MENU, LOAD_USERS } from './actions';

const initialState = {
  isMenuOpen: false,
  users: []
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MENU:
      return Object.assign({}, state, { isMenuOpen: payload });

    case CLOSE_MENU:
      return Object.assign({}, state, { isMenuOpen: payload });

    case LOAD_USERS:
      return Object.assign({}, state, { users: payload });

    default:
      return state;
  }
};
