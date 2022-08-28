import type { Page } from '@/types/global';

export const getPage = (data: Page<any>) => {
  return {
    'total': data.total || 0,
    'current': data.page || 1,
    'page-size': data.pageSize || 20,
  };
};

export const getDefaultPage = () => {
  return {
    'total': 0,
    'current': 1,
    'page-size': 20,
  };
};
