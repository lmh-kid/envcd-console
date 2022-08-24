import axios from 'axios';
import type { Dictionaries } from '@/types/dictionaries';
import type { Page } from '@/types/global';

export function createDictionaries(dictionaries: Dictionaries) {
  return axios.post<Dictionaries[]>(`/v1/dictionaries`, dictionaries);
}

export function getDictionariesList() {
  return axios.get<Page<Dictionaries[]>>(`/v1/dictionaries`);
}

export function getDictionariesById(id: number) {
  return axios.get<Dictionaries>(`/v1/dictionaries/${id}`);
}

export function updateDictionariesById(id: number, dictionaries: Dictionaries) {
  return axios.put<Dictionaries>(`/v1/dictionaries/${id}`, dictionaries);
}

export function deleteDictionariesById(id: number) {
  return axios.delete(`/v1/dictionaries/${id}`);
}
