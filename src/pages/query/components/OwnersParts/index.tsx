import React, { ComponentProps } from 'react';
import { Table } from 'antd';
import * as helpers from '@/utils/helpers';

interface OwnersPartsProps extends ComponentProps<any> {
  data: any[];
  loading?: boolean;
}

export default function OwnersPartsProps(props: OwnersPartsProps) {
  const { data = [], loading = false } = props;
  return (
    <Table dataSource={data} columns={columns} loading={loading} size="small" />
  );
}

const columns = [
  {
    title: 'Type',
    dataIndex: 'docType',
    key: 'docType',
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Seria Number',
    dataIndex: 'serialNumber',
    key: 'serialNumber',
  },
  {
    title: 'Product Assembler',
    dataIndex: 'assembler',
    key: 'assembler',
  },
  {
    title: 'Assembly Date',
    dataIndex: 'assemblyDate',
    key: 'assemblyDate',
    render: (assemblyDate: number) =>
      assemblyDate ? <>{helpers.formatTime(assemblyDate)}</> : null,
  },
  {
    title: 'Can Be Recalled',
    dataIndex: 'recall',
    key: 'recall',
    render: (recall: boolean) => (recall ? <>Yes</> : <>No</>),
  },
  {
    title: 'Recall Date',
    dataIndex: 'recallDate',
    key: 'recallDate',
    render: (recallDate: number) =>
      recallDate ? <>{helpers.formatTime(recallDate)}</> : null,
  },
];
