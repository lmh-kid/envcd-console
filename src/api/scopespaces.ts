import axios from 'axios';
import type { Scopespaces } from '@/types/scopespaces';
import type { Page } from '@/types/global';

export function getScopespacesList(params: any) {
  return axios.get<Page<Scopespaces[]>>(`/v1/scopespaces`, params);
}

// todo
export function updateScopespaces(data: any) {
  return axios.post<Scopespaces>(`/v1/scopespaces`, data);
}

export function getScopespacesById(id: number) {
  return axios.get<Scopespaces[]>(`/v1/scopespaces/${id}`);
}

export function updateScopespacesById(id: number, scopespaces: Scopespaces) {
  return axios.put<Scopespaces[]>(`/v1/scopespaces/${id}`, scopespaces);
}

export function deleteScopespacesById(id: number) {
  return axios.delete(`/v1/scopespaces/${id}`);
}
