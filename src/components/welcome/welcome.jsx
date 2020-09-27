import * as React from 'react';

const Welcome = (props) => {
  const {keycloak} = props;

  return (
    <section className="welcome">
      <div className="welcome__wrapper">
        <h2 className="welcome__header">Здравствуйте!</h2>
        <p className="welcome__description">Пожалуйста, авторизуйтесь.</p>
        <button type="button" className="welcome__button" onClick={() => keycloak.login()}>Вход</button>
      </div>
    </section>
  );
};

export default Welcome;
