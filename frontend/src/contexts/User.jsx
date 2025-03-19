import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData); // Guarda los datos del usuario al iniciar sesión
      };
    
      // Función para simular el cierre de sesión
      const logout = () => {
        setUser(null); // Elimina los datos del usuario al cerrar sesión
      };

    return (
        <UserContext.Provider value={{ user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;