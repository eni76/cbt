import { createContext, useState } from "react";

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    fisrstName: "Sam",
    lastName: "Smith",
    email: "samsmith@gmail.com",
    role: "teacher"
  });
  return (
  <AuthContext.Provider value={{user, setUser}}>
    {children}
  </AuthContext.Provider>
  );
}

export default AuthContext;
export {AuthProvider};