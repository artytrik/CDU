import * as React from 'react';
import Welcome from '../welcome/welcome.jsx';
import {withKeycloak} from '@react-keycloak/web';

class App extends React.PureComponent {
  constructor() {
    super();

    this.handleWelcomeButton = this.handleWelcomeButton.bind(this);
  }

  handleWelcomeButton(evt, action) {
    const {keycloak} = this.props;

    evt.preventDefault();

    switch(action) {
      case 'login':
        return keycloak.login();
      case 'logout':
        return keycloak.logout();
      default:
        return void 0;
    }
  }

  render() {
    const {keycloak, keycloakInitialized} = this.props;
    const {authenticated, realmAccess, idTokenParsed} = keycloak;

    return (
      <main className="page__main">
        <h1 className="visually-hidden">CDU</h1>
        {keycloakInitialized &&
          <Welcome
            handleWelcomeButton={this.handleWelcomeButton}
            isInitialized={keycloakInitialized}
            isAuthorized={authenticated}
            realmAccess={realmAccess}
            token={idTokenParsed}
          />
        }
      </main>
    );
  }
};

export default withKeycloak(App);
