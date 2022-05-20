export type ISession = {
  AccessToken?: string;
  RefreshToken?: string;
  isAuthenticated: boolean;
  roles?: role[];
  UserName?: string;
  userID?: string;
};

export type LoginParamsType = {
  userName: string;
  Password: string;
  rememberMe?: boolean;
};

export enum role {
  'SUPERADMIN',
  'ADMIN',
  'GUEST',
  'USER'
}
