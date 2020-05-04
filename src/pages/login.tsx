import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import LoginForm from '@/components/LoginForm';
import { salt } from '@/config';
import styles from './login.less';

export default function LoginPage(props: any) {
  const { location } = props;
  const { search = '' } = location;
  const to = search.replace('?from=', '') || '/dashboard';
  const [isLoginIn, setLoginState] = useState(true);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem(salt);
    if (storedAuth) {
      history.push(`${to}`);
    } else {
      setLoginState(false);
    }
  }, []);

  if (isLoginIn) {
    return null;
  }

  return (
    <div className={styles.login}>
      <div className={styles.formBox}>
        <LoginForm to={to} />
      </div>
    </div>
  );
}
