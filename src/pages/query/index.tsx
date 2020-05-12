import React, { useState } from 'react';
import { Divider, notification } from 'antd';
import QueryForm from './components/QueryForm';
import OwnersParts from './components/OwnersParts';

import * as transaction from '@/services/transaction';

export default function QuerySample() {
  const [queryState, setQueryState] = useState({
    parts: [],
    loading: false,
  });

  const queryHandler = (values: any) => {
    setQueryState({
      ...queryState,
      loading: true,
    });
    transaction
      .queryCreatedVehiclesPart(values.owner)
      .then((data: any) => {
        const { returnCode, result } = data;
        if (returnCode == 'Success') {
          const payload = JSON.parse(result.payload);
          const parts = payload.map((item: any) => JSON.parse(item.valueJson));
          setQueryState({
            ...queryState,
            loading: false,
            parts,
          });
          const msg = parts.length
            ? `Found ${parts.length} vehicle part${
                parts.length > 1 ? 's' : ''
              } `
            : `Owner doesn't have record.`;
          notification.info({
            message: msg,
          });
        }
        if (returnCode == 'Failure') {
          notification.error({
            message: data.info.proxyError || 'Failure',
            description: data.info.peerErrors[0].errMsg,
          });
          setQueryState({
            ...queryState,
            loading: false,
          });
        }
      })
      .catch(e => {
        notification.error({
          message: 'Something went wrong, please refresh page',
        });
        setQueryState({
          ...queryState,
          loading: false,
        });
      });
  };

  return (
    <>
      <QueryForm onSearch={queryHandler} />
      <Divider />
      <OwnersParts
        data={queryState.parts}
        loading={queryState.loading}
        rowKey={'serialNumber'}
      />
    </>
  );
}
