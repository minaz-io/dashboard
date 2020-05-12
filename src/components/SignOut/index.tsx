import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import * as helpers from '@/utils/helpers';

export default function SignOut() {
  const signOut = () => {
    helpers.removeStoredAuth();
    helpers.redirectToLogin();
  };
  return (
    <Button onClick={signOut}>
      Log Out
      <ArrowRightOutlined />
    </Button>
  );
}
