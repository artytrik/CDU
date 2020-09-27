import Keycloak from 'keycloak-js';

const keycloakConfig = {
   url: 'https://84.201.176.223:8443/auth',
   realm: 'testRealm',
   clientId: 'test',
   onLoad: 'login-required'
}

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
