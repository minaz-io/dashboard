export const DASHBOARD_ROUTES = {
  path: '/dashboard',
  component: '@/layout/index',
  title: 'Dashboard',
  routes: [
    {
      path: '/dashboard/create',
      component: '@/pages/create/index.tsx',
      exact: true,
      title: 'Create Object',
      description: 'Create 5 parts for Sam Dealership',
    },
    {
      path: '/dashboard/query',
      component: '@/pages/query/index.tsx',
      exact: true,
      title: 'Query Object',
      description: 'Query created vehicles parts',
    },
  ],
};
