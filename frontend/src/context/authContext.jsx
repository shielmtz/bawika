/* eslint-disable */

import { createContext, useState, useContext, useEffect } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState(null);


    const [isAuth, setAuth] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');
        const userRole = localStorage.getItem('role');


        if (token && userRole && name) {
            setAuth(true);
            setUserName(name);
            setUserRole(userRole);

        } else {
            setAuth(false);
            setUserName(null);
            setUserRole(null);

        }
    }, []);
    const refreshAuth = () => {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');
        const userRole = localStorage.getItem('role');

        if (token && userRole && name) {
            setAuth(true);
            setUserName(name);
            setUserRole(userRole);
        } else {
            setAuth(false);
            setUserName(null);
            setUserRole(null);
        }
    };

    const login = (newToken, role, name) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
        setUserName(name);
        setUserRole(role);
        setAuth(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        setAuth(false);
        setUserName(null);
        setUserRole(null);

    };

    return (
        <AuthContext.Provider value={{ userRole, isAuth, login, logout, refreshAuth, userName }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
