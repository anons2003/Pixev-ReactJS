import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Demo users data
const demoUsers = [
  {
    id: 1,
    name: 'Steven Townsend',
    email: 'steven@pixev.com',
    avatar: null,
    role: 'Premium User',
    plan: 'Premium Monthly',
    downloads: 234,
    joinDate: 'Jan 2024'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@pixev.com', 
    avatar: null,
    role: 'Creator',
    plan: 'Creator Pro',
    downloads: 89,
    joinDate: 'Mar 2024'
  },
  {
    id: 3,
    name: 'Demo User',
    email: 'demo@pixev.com',
    avatar: null,
    role: 'Free User', 
    plan: 'Free Plan',
    downloads: 12,
    joinDate: 'Jun 2024'
  }
];

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('pixev_demo_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('pixev_demo_user');
      }
    }
  }, []);

  const login = (email) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const foundUser = demoUsers.find(u => u.email === email);
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('pixev_demo_user', JSON.stringify(foundUser));
      }
      setIsLoading(false);
    }, 500);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pixev_demo_user');
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
    demoUsers
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
