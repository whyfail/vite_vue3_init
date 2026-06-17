const KEY_TOKEN = "xxx_web_app_token";

export function isAuthenticated() {
  return !!localStorage.getItem(KEY_TOKEN) || !!sessionStorage.getItem(KEY_TOKEN);
}

export function getToken() {
  return localStorage.getItem(KEY_TOKEN) || sessionStorage.getItem(KEY_TOKEN);
}

export function setToken(token: string, persist = false) {
  sessionStorage.setItem(KEY_TOKEN, token);

  if (persist) {
    localStorage.setItem(KEY_TOKEN, token);
  }
}

export function clearSession() {
  localStorage.removeItem(KEY_TOKEN);
  sessionStorage.removeItem(KEY_TOKEN);
}

export { clearSession as clearToken, isAuthenticated as isLogin };
