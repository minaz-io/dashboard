import React, { ComponentProps, useState } from 'react';
import { Form, Input, Button, message, DatePicker, Checkbox, Spin } from 'antd';

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

interface CreateObjectFormProps extends ComponentProps<any> {
  onFinished: (values: any) => any;
  onFinishFailed?: (values: any) => any;
}

export default function CreatingCarPartForm(props: CreateObjectFormProps) {
  const [form] = Form.useForm();
  const [isSpining, setSpining] = useState(false);
  const onCheckChange = (e: any) => {
    form.setFieldsValue({
      recall: e.target.checked,
    });
  };

  const { onFinished } = props;
  const onFinishHandler = async (values: any) => {
    setSpining(true);

    const { assemblyDate, recallDate, ...rest } = values;
    const params = {
      assemblyDateEpoch: new Date(assemblyDate._d).getTime() / 1000,
      recallDateEpoch:
        (recallDate && new Date(recallDate._d).getTime() / 1000) || 0,
      ...rest,
    };
    const args = [
      params.serialNo,
      params.assembler,
      params.assemblyDateEpoch,
      params.prodName,
      params.prodOwner,
      !!params.recall,
      params.recallDateEpoch,
    ];

    onFinished({ args });
    let t1: any = setTimeout(() => {
      clearTimeout(t1);
      t1 = null;
      setSpining(false);
    }, 250);
  };

  const onFinishFailedHandler = (erroInfo: any) => {
    message.error(`Please fill the form fields.`);
  };

  const container = (
    <Form
      name="create"
      {...layout}
      onFinish={onFinishHandler}
      onFinishFailed={onFinishFailedHandler}
      form={form}
    >
      <Form.Item
        label="Product Name"
        name="prodName"
        rules={[
          {
            required: true,
            message: 'Please provide component name',
          },
        ]}
      >
        <Input placeholder="name" type="text" />
      </Form.Item>
      <Form.Item
        label="Serial Number"
        name="serialNo"
        rules={[
          {
            required: true,
            pattern: new RegExp(/^[0-9]\d*$/, 'g'),
            message: 'Please provide correct serial number',
          },
        ]}
      >
        <Input placeholder="serial number" type="text" />
      </Form.Item>
      <Form.Item
        label="Product Assembler"
        name="assembler"
        rules={[
          {
            required: true,
            message: 'Please provide part assembler',
          },
        ]}
      >
        <Input placeholder="assembler" type="text" />
      </Form.Item>
      <Form.Item
        label="Assembly Date"
        name="assemblyDate"
        rules={[
          {
            required: true,
            message: 'Please provide assembly date.',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Product Owner"
        name="prodOwner"
        rules={[
          {
            required: true,
            message: 'Please provide product owner',
          },
        ]}
      >
        <Input placeholder="owner" />
      </Form.Item>
      <Form.Item label="Recall Product" name="recall">
        <Checkbox onChange={onCheckChange} />
      </Form.Item>
      <Form.Item label="Recall Date" name="recallDate">
        <DatePicker />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <Spin spinning={isSpining}>{container}</Spin>
    </>
  );
}
