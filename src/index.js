import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {KeycloakProvider} from '@react-keycloak/web';
import keycloak from './keycloak';

ReactDOM.render(
    <KeycloakProvider keycloak={keycloak}>
      <App/>
    </KeycloakProvider>,
    document.querySelector(`#root`)
);
