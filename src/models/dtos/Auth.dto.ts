export type ISession = {
  AccessToken?: string;
  RefreshToken?: string;
  isAuthenticated: boolean;
  FirstName?: string;
  UserId?: string;
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
