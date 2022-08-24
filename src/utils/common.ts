import type { Page } from '@/types/global';

export const getPage = (data: Page<any>) => {
  return {
    'total': data.total,
    'current': data.page,
    'page-size': data.pageSize,
  };
};

export const getDefaultPage = () => {
  return {
    'total': 0,
    'current': 1,
    'page-size': 20,
  };
};
