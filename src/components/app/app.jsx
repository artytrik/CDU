import * as React from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome/welcome.jsx';
import {withKeycloak} from '@react-keycloak/web';
import {BUTTON_FUNCTION} from '../../utils.js';

class App extends React.PureComponent {
  constructor() {
    super();

    this.handleWelcomeButton = this.handleWelcomeButton.bind(this);
  }

  handleWelcomeButton(evt, action) {
    const {keycloak} = this.props;

    evt.preventDefault();

    switch (action) {
      case BUTTON_FUNCTION.LOGIN:
        return keycloak.login();
      case BUTTON_FUNCTION.LOGOUT:
        return keycloak.logout();
      default:
        return void 0;
    }
  }

  render() {
    const {keycloak, keycloakInitialized} = this.props;
    const {authenticated, realmAccess, idTokenParsed} = keycloak;

    return (
      <main className="page-main">
        <h1 className="visually-hidden">CDU</h1>
        {keycloakInitialized ?
          <Welcome
            handleWelcomeButton={this.handleWelcomeButton}
            isInitialized={keycloakInitialized}
            isAuthorized={authenticated}
            realmAccess={realmAccess}
            token={idTokenParsed}
          />
          :
          <div className="page-main__wrapper">
            <h2 className="page-main__header">Loading...</h2>
          </div>
        }
      </main>
    );
  }
}

App.propTypes = {
  keycloak: PropTypes.object,
  keycloakInitialized: PropTypes.bool
};

export default withKeycloak(App);
