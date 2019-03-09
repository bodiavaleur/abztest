import {
  OPEN_MENU,
  CLOSE_MENU,
  LOAD_USERS,
  SET_CURRENT_USER,
  SET_TOKEN
} from './actions';

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

export const setCurrentUser = payload => ({
  type: SET_CURRENT_USER,
  payload
});

export const setToken = payload => ({
  type: SET_TOKEN,
  payload
});
