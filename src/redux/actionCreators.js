import { OPEN_MENU, CLOSE_MENU } from './actions';

export const openMenu = payload => ({
  type: OPEN_MENU,
  payload
});

export const closeMenu = payload => ({
  type: CLOSE_MENU,
  payload
});
