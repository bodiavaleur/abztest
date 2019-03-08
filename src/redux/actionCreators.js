import { OPEN_MENU, CLOSE_MENU, LOAD_USERS } from './actions';

export const openMenu = payload => ({
  type: OPEN_MENU,
  payload
});

export const closeMenu = payload => ({
  type: CLOSE_MENU,
  payload
});

export const loadUsers = payload => ({
  type: LOAD_USERS,
  payload
});
