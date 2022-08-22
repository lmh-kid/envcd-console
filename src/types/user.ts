export interface User {
  id?: number;
  name: string;
  identity: number; // 0 1
  state: boolean;
  createAt?: string;
  updateAt?: string;
}
