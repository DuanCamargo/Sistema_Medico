import React from 'react'

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const initialClinicState = {
        id: null,
        name: "",
        address: "",
        telephone: "",
    };

    return (
        <AuthContext.Provider value={{initialClinicState}}>
            {props.children}
        </AuthContext.Provider>
    )
}