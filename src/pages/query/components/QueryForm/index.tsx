import React, { ComponentProps } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface QueryFormProps extends ComponentProps<any> {
  onSearch: (values: any) => void;
}

export default function QueryForm(props: QueryFormProps) {
  return (
    <>
      <Typography.Title level={3}>Query Product By Owner</Typography.Title>
      <Form
        name="query"
        layout={'inline'}
        {...layout}
        onFinish={props.onSearch}
      >
        <Form.Item
          name="owner"
          label="Owner"
          rules={[
            {
              required: true,
              message: 'Please provide owner.',
            },
          ]}
        >
          <Input placeholder="part owner" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            shape="circle"
            icon={<SearchOutlined />}
          ></Button>
        </Form.Item>
      </Form>
    </>
  );
}

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 17,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 16,
  },
};
