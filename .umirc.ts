import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  dynamicImport: {},
  routes: [
    { path: '/login', component: '@/pages/login', title: 'Login' },
    {
      path: '/',
      component: '@/layout',
      redirect: '/dashboard',
      title: 'Dashboard',
    },
    {
      path: '/dashboard',
      component: '@/layout',
      title: 'Dashboard',
      routes: [
        {
          path: '/dashboard',
          component: '@/pages/chaincode',
          exact: true,
          title: 'Chain Code',
        },
        // we add sub routes here
      ],
    },
  ],
});
