import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Typography } from 'antd';
import CreatingForm from './components/Form';
import Result from './components/Result/index';
import style from './index.less';

function CreateingPartForSam(props: any) {
  const { dealerSam, dispatch } = props;

  // read saved step avoid duplicated creating
  useEffect(() => {
    dispatch({
      type: 'dealerSam/getSavedStep',
    });
  }, []);

  const onFinished = (values: any) => {
    dispatch({
      type: 'dealerSam/createPart',
      payload: values,
    });
  };

  return (
    <>
      <Typography.Title level={2} className={style.title}>
        Create a vehicle part
      </Typography.Title>
      <CreatingForm
        onFinished={onFinished}
        options={dealerSam.currentStepDesc.options}
      />
      {dealerSam.stepData ? <Result data={dealerSam.stepData} /> : null}
    </>
  );
}

export default connect((state: any) => {
  const { dealerSam } = state;
  return { dealerSam };
})(CreateingPartForSam);
