import { DEFAULT_LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/application',
  name: 'application',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.scopespaces',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'index',
      name: 'applicationIndex',
      component: () => import('@/views/application/index.vue'),
      meta: {
        locale: 'menu.scopespaces',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
