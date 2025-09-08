import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  selectedRole?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  updateUserRole: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    setUser({
      id: '1',
      name: email.split('@')[0],
      email: email
    });
  };

  const signup = async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    setUser({
      id: '1',
      name: name,
      email: email
    });
  };

  const updateUserRole = (role: string) => {
    if (user) {
      setUser({ ...user, selectedRole: role });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    updateUserRole,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};