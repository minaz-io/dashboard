import React, { ComponentProps } from 'react';
import { Card, Typography } from 'antd';

interface ResultProps extends ComponentProps<any> {
  data: any;
}

export default function StepResult(props: ResultProps) {
  const { data = {} } = props;
  return (
    <Card>
      <Typography.Title level={3}>Operation Result</Typography.Title>
      <Typography.Paragraph>{JSON.stringify(data)}</Typography.Paragraph>
    </Card>
  );
}
