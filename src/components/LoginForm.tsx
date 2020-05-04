import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { history } from 'umi';
import * as user from '@/services/user';
import * as helpers from '@/utils/helpers';
import styles from './LoginForm.less';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 11,
    span: 16,
  },
};

export default function LoginForm(props: any) {
  const { to } = props;
  const [buttonState, setButtonState] = useState('open');

  const error = (msg: string) => {
    message.error(msg);
  };

  const onFinish = (results: any) => {
    setButtonState('loading');
    const { username, password } = results;
    user
      .doLogin(username, password)
      .then(data => {
        setButtonState('open');
        if (data && data.returnCode == 'Success') {
          history.push(to);
        } else {
          error(`Password doesn't match username.`);
          helpers.removeStoredAuth();
        }
      })
      .catch(e => {
        error(`Password doesn't match username.`);
        helpers.removeStoredAuth();
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    error('Please enter your user name and password.');
  };

  return (
    <>
      <Form
        name="login"
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.form}
      >
        <Form.Item
          label="User Name"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please enter your user name!',
            },
          ]}
        >
          <Input placeholder={'user name'}></Input>
        </Form.Item>
        <Form.Item
          label={'Password'}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password placeholder={'password'} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            loading={buttonState == 'loading'}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
