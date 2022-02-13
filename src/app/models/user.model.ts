export interface I_Registration {
  user: User;
  access_token: string;
}

export interface User {
  name: string;
  nic: string;
  updated_at: Date;
  created_at: Date;
  id: number;
}
