import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData,
} from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { User } from '@/types/user';
import useAppStore from '../app';

const useUserStore = defineStore('user', {
  state: (): User => ({
    id: 0,
    name: '',
    identity: 0, // 0 1
    state: 'enabled',
  }),

  getters: {
    userInfo(state: User): User {
      return { ...state };
    },
  },

  actions: {
    switchRoles() {
      // return new Promise((resolve) => {
      //   this.role = this.role === 'user' ? 'admin' : 'user';
      //   resolve(this.role);
      // });
    },
    // Set user's information
    setInfo(partial: Partial<User>) {
      this.$patch(partial);
      console.log('partial', partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      if (this.id) {
        const res = await getUserInfo(this.id);
        this.setInfo(res);
      }
    },

    // Login
    async login(loginForm: LoginData) {
      try {
        const res = await userLogin(loginForm);
        this.id = res.userId;
        setToken(res.accessToken);
      } catch (err) {
        clearToken();
        throw err;
      }
    },
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },
    // Logout
    async logout() {
      try {
        await userLogout(this.name);
      } finally {
        this.logoutCallBack();
      }
    },
  },
});

export default useUserStore;
