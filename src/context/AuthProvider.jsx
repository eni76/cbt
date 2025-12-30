import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext()
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {});

  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };