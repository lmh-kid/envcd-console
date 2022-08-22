import { DEFAULT_LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/config',
  name: 'config',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dictionaries',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'index',
      name: 'configIndex',
      component: () => import('@/views/dictionaries/index.vue'),
      meta: {
        locale: 'menu.dictionariesList',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
