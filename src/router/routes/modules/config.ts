import { DEFAULT_LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/config',
  name: 'config',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.config',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'index',
      name: 'configIndex',
      component: () => import('@/views/config/index.vue'),
      meta: {
        locale: 'menu.config',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
