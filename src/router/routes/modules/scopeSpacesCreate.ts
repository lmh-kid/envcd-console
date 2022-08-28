import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/scopespaces/create',
  name: 'scopeSpacesCreate',
  component: () => import('@/views/scopespaces/create/create.vue'),
  meta: {
    locale: 'menu.scopespaces',
    requiresAuth: true,
    hideInMenu: true,
    icon: 'icon-dashboard',
    order: 0,
  },
};

export default DASHBOARD;
