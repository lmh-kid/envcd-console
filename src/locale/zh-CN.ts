import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';
import localeUsers from '@/views/users/locale/zh-CN';
import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';
import localeDictionaries from '@/views/dictionaries/locale/zh-CN';
import localeScopespaces from '@/views/scopespaces/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  // menu
  'menu.dictionaries': '字典管理',
  'menu.dictionariesList': '字典列表',
  'menu.scopespaces': '作用空间',
  'menu.scopeSpacesCreate': '创建空间',
  'menu.users': '用户管理',
  'menu.userList': '用户列表',
  'global.edit': '编辑',
  'global.delete': '删除',

  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  ...localeUsers,
  ...localeScopespaces,
  ...localeDictionaries,
};
