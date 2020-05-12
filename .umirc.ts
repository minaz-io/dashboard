import { defineConfig } from 'umi';
import { DASHBOARD_ROUTES } from './src/config/routes';

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
      component: '@/layout/index.tsx',
      redirect: '/dashboard',
      title: 'Dashboard',
    },
    DASHBOARD_ROUTES,
    {
      path: '/*',
      component: '@/pages/404.tsx',
    },
  ],
});
