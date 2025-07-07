import { createContext, useContext, useEffect, useState } from 'react';
import keycloak from '../services/authService'; // Ensure the correct path to the Keycloak service

const KeycloakContext = createContext();

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        keycloak.init({ onLoad: 'check-sso', silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' })
            .then((authenticated) => {
                setAuthenticated(authenticated);
            })
            .catch((error) => {
                console.error('Keycloak initialization failed', error);
            });
    }, []);

    return (
        <KeycloakContext.Provider value={{ authenticated, keycloak }}>
            {children}
        </KeycloakContext.Provider>
    );
};
