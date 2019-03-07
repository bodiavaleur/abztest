import { OPEN_MENU, CLOSE_MENU } from './actions';

const initialState = {
  isMenuOpen: false
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MENU:
      return Object.assign({}, state, { isMenuOpen: payload });

    case CLOSE_MENU:
      return Object.assign({}, state, { isMenuOpen: payload });

    default:
      return state;
  }
};
