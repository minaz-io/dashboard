import { useEffect } from 'react';
import { history } from 'umi';
import * as helpers from '@/utils/helpers';
import * as config from '@/config';

export default function CheckAuth(props: any) {
  const { location } = props;
  let from = location.pathname;
  from = from == '/' ? config.DEFAULT_PATH : from;

  useEffect(() => {
    const storedAuth = helpers.getStoredAuth();
    if (storedAuth) {
      history.push(from);
    } else {
      history.push(`/login?from=${from}`);
    }
  }, []);

  return null;
}
