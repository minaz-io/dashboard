import React, { useState } from 'react';
import { Form, Input, Button, Card, Select } from 'antd';
import styles from './Chaincode.less';
import * as tx from '@/services/transaction';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const path = '/bcsgw/rest/v1/transaction/invocation';

export default function Chaincode(props: any) {
  const [state, setState] = useState({
    tx: null,
    msg: '',
  });

  const onFinish = (values: any) => {
    const params = {
      channel: 'default',
      chaincode: 'obcs-cardealer',
      chaincodeVer: 'v0',
      args: values.args,
      method: 'queryVehiclePartByOwner',
    };
    tx.invokeTxn(path, params).then(data => {
      setState({
        tx: data,
        msg: 'success',
      });
    });
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div className={styles.chaincode}>
      {state.tx ? (
        <Card>
          <strong>Result</strong>
          <p>{JSON.stringify(state.tx)}</p>
        </Card>
      ) : null}
      <Card className={styles.test}>
        <Form
          name="chaincode"
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label={'Arguments'}
            name="args"
            rules={[
              {
                required: true,
                message: 'Please select arguments!',
              },
            ]}
          >
            <Select mode="multiple" placeholder="Please select arguments.">
              <Option value="wheel">Wheel</Option>
            </Select>
          </Form.Item>
          <Form.Item label={'Method'}>
            <Input disabled placeholder={'queryVehiclePartByOwner'} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Execute
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
