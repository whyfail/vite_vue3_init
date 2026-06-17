import { clearSession } from '@/features/auth/session';
import { notify } from './notifications';

export function navigateToLogin() {
  if (window.location.hash !== '#/login') {
    window.location.hash = '#/login';
  }
}

export function handleUnauthorized() {
  notify.error('登录已过期，请重新登录');
  clearSession();
  window.setTimeout(navigateToLogin, 500);
}
