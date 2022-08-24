import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';
import type { User } from '@/types/user';
import type { Scopespaces } from '@/types/scopespaces';
import type { Dictionaries } from '@/types/dictionaries';
import type { Page } from '@/types/global';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}

export interface RegisterData {
  name: string;
  password: string;
  identity: number;
  state: boolean;
}

export function createUser(data: RegisterData) {
  return axios.put('/admin/user', data);
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/login', data);
}

export function logout() {
  return axios.get<LoginRes>('/logout');
}

export function getUserInfo(userId: string) {
  return axios.get<UserState>(`/admin/user/${userId}`);
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}

export function getUserList() {
  return axios.get<any, Page<User[]>>('/v1/users');
}

export function updateUserById(user: User) {
  return axios.put(`/v1/users/${user.id}`, user);
}

export function getUserById(userId: string) {
  return axios.get<User>(`/v1/users/${userId}`);
}

export function deleteUserById(userId: string) {
  return axios.delete(`/v1/users/${userId}`);
}

export function getScopespacesListById(userId: string) {
  return axios.get<Page<Scopespaces[]>>(`/v1/users/${userId}/scopespaces`);
}

export function getDictionariesListById(
  userId: string,
  scopespacesId?: string
) {
  let requestUrl = `/v1/users/${userId}/dictionaries`;
  if (scopespacesId) {
    requestUrl = `/v1/users/${userId}/scopespace/${scopespacesId}/dictionaries`;
  }
  return axios.get<Page<Dictionaries[]>>(requestUrl);
}
