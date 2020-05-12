import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'umi';
import AccountCategory from '@/components/AccountCategory';
import SignOut from '@/components/SignOut';
import style from './index.less';

const { Footer, Sider, Content, Header } = Layout;

const accountData = {
  logoUrl: '../../imgs/logo.png',
  companyName: 'Minaz',
  accountRole: 'Administrator',
  companyRate: 5,
};

export default function DashboardLayout(props: any) {
  return (
    <>
      <Layout>
        <Sider className={style.sider}>
          <AccountCategory {...accountData} />
          <nav className={style.sidenav}>
            <Menu>
              <Menu.Item>
                <NavLink
                  to={'/dashboard/create'}
                  activeClassName={style.active}
                >
                  {' '}
                  Create Sample
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={'/dashboard/query'} activeClassName={style.active}>
                  Query Sample
                </NavLink>
              </Menu.Item>
            </Menu>
          </nav>
        </Sider>
        <Layout>
          <Header className={style.header}>
            <SignOut />
          </Header>
          <Content className={style.content}>{props.children}</Content>
          <Footer className={style.footer}>Copyright © 2020 MINAZ B2B</Footer>
        </Layout>
      </Layout>
    </>
  );
}
