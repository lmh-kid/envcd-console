import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';
import localeUsers from '@/views/users/locale/en-US';
import localeScopespaces from '@/views/scopespaces/locale/en-US';
import localeDictionaries from '@/views/dictionaries/locale/en-US';
import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';

import errorCode from './en-US/error-code';
import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  // menu
  'menu.dictionaries': 'Dictionaries',
  'menu.dictionariesList': 'Dictionaries List',
  'menu.scopespaces': 'Scope Spaces',
  'menu.scopeSpacesCreate': 'Create Scope Spaces',
  'menu.users': 'User Management',
  'menu.userList': 'User List',
  'global.edit': 'Edit',
  'global.delete': 'Delete',

  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  ...localeUsers,
  ...localeScopespaces,
  ...localeDictionaries,
  ...errorCode,
};
