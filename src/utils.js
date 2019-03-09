const apiUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getAllUsers = (page, cb) =>
  fetch(`${apiUrl}/users?page=${page}&count=6`)
    .then(res => res.json())
    .then(res => cb(res.users));

export const getCurrentUser = (uid, cb) =>
  fetch(`${apiUrl}/users/${uid}`)
    .then(res => res.json())
    .then(res => cb(res.user));

export const getToken = cb =>
  fetch(`${apiUrl}/token`)
    .then(res => res.json())
    .then(res => cb(res.token));

export const submitData = (data, token) =>
  fetch(`${apiUrl}/users`, {
    method: 'POST',
    headers: { Token: token },
    body: data
  })
    .then(res => res.json())
    .then(res => console.log('res :', res));
