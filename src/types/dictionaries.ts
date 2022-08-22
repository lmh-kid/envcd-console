export interface Dictionaries {
  id?: number;
  userId?: number;
  scopeSpaceId?: number;
  dictKey: string;
  dictValue: string;
  version?: string;
  state?: 'enabled' | 'disabled' | 'deleted';
  createAt?: string;
  updateAt?: string;
}
