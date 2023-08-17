import React, { createContext, useState, useContext } from 'react';

//creating a context for login check and exporting it
export const AuthContext = createContext();


//this will serve as the AuthContext provider 

// we have to wrap this context in the App.js so that every component in our application can access the states
// defined in it

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //login function to change the isAuthenticated state to true
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    // passing the state var and both the functions as prop to every component
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}> 
      {children}
    </AuthContext.Provider>
  );
}

// export function useAuth() {
//   return useContext(AuthContext);
// }
