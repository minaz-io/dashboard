import React, { ComponentProps } from 'react';
import { Typography, Rate } from 'antd';
import { Link } from 'umi';
import * as config from '@/config/index';
import style from './style.less';

const { Title } = Typography;

interface AccountCategoryProps extends ComponentProps<any> {
  logoUrl: string;
  companyName: string;
  accountRole: string;
  companyRate: number;
}

export default function AccountCategory(props: AccountCategoryProps) {
  const { logoUrl, companyName, accountRole, companyRate } = props;
  return (
    <div className={style.wrapper}>
      <Link to={config.DEFAULT_PATH}>
        <img src={logoUrl} alt={companyName} className={style.logo} />
      </Link>
      <header>
        <Title level={3} className={style.company}>
          {companyName}
        </Title>
        <span className={style.role}>{accountRole}</span>
        <Rate allowHalf defaultValue={companyRate} disabled></Rate>
      </header>
    </div>
  );
}
