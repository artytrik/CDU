import * as React from 'react';
import Welcome from '../welcome/welcome.jsx';
import {withKeycloak} from '@react-keycloak/web';

const Main = (props) => {
  const {keycloak} = props;
  return (
    <main className="page__main">
      <h1 className="visually-hidden">CDU</h1>
      <Welcome
        keycloak={keycloak}
      />
    </main>
  );
};

export default withKeycloak(Main);
