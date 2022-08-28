import { DEFAULT_LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/scopespaces',
  name: 'scopespaces',
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
      name: 'scopeSpacesIndex',
      component: () => import('@/views/scopespaces/index.vue'),
      meta: {
        locale: 'menu.scopespaces',
        requiresAuth: true,
        hideChildrenInMenu: true,
        roles: ['*'],
      },
    },
    {
      path: 'create',
      name: 'scopeSpacesCreate',
      component: () => import('@/views/scopespaces/create/create.vue'),
      meta: {
        locale: 'menu.scopeSpacesCreate',
        requiresAuth: true,
        hideInMenu: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
