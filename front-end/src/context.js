import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [userType, setUserType] = useState('clientes');
    const [logged, setLogged] = useState(false);

    return (
        <AppContext.Provider value={{user, setUser, logged, setLogged, userType, setUserType}}>
            {children}
        </AppContext.Provider>
    )

}

export { AppContext, AppProvider };