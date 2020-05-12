import { history } from 'umi';
import { salt, DEFAULT_PATH } from '@/config';
import { notification } from 'antd';

export const storeAuth = (username: string, password: string) => {
  const auth = 'Basic ' + btoa(`${username}:${password}`);
  sessionStorage.setItem(salt, auth);
};

export const getStoredAuth = () => {
  return sessionStorage.getItem(salt);
};

export const removeStoredAuth = () => {
  return sessionStorage.removeItem(salt);
};

export const redirectToLogin = (from: string = DEFAULT_PATH) => {
  notification.error({
    description: 'You have to login in first.',
    message: 'No authrization',
  });
  let t1: any = setTimeout(() => {
    clearTimeout(t1);
    t1 = null;
    sessionStorage.removeItem(salt);
    history.push(`/login?from=${from}`);
  }, 350);
};

export const sleep = async (ms: number = 0) => {
  return new Promise(resolve => {
    let t1: any = setTimeout(() => {
      clearTimeout(t1);
      t1 = null;
      resolve();
    }, ms);
  });
};

export function formatTime(time: number) {
  // the time returned from Oracle RPC service is in epoch format
  const timeStr = new Date(time * 1000)
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');
  return timeStr;
}
