export function getUser() {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
}

export function getToken() {
  return sessionStorage.getItem('token') || null;
}

export function removeUserSession() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

export function setUserSession(user, token) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', user);
}
