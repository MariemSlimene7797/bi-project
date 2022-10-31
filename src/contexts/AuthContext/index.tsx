import React, { createContext, useContext, useState } from 'react';
import { ISession, LoginParamsType } from '../../models/dtos/Auth.dto';

interface IAuthContext {
  session: ISession;
  logOut: () => Promise<void>;
  logIn: (params: LoginParamsType) => Promise<ISession>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthContextProvider: React.FC = ({ children }) => {
  const [session, setSession] = useState<ISession>({ isAuthenticated: false });

  const logIn = async (params: LoginParamsType): Promise<ISession> => {
    setSession({
      isAuthenticated: true
    });
    return session;
  };

  const logOut = async (): Promise<void> => {
    setSession({
      isAuthenticated: false
    });
  };

  return <AuthContext.Provider value={{ session, logOut, logIn }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
};
export default AuthContextProvider;
