import * as React from 'react';

const getClassByRole = (role) => {
  switch(role) {
    case 'SCOPE_read':
      return ` welcome__description--red`;
    case 'SCOPE_write':
      return ` welcome__description--green`;
    default:
      return ``;
  }
};

const Welcome = (props) => {
  const {handleWelcomeButton, isAuthorized, realmAccess, token} = props;
  const {roles} = realmAccess;
  const {preferred_username: userName} = token;

  return (
    <section className="welcome">
      <div className="welcome__wrapper">
        {!isAuthorized ?
          <div>
            <h2 className="welcome__header">Здравствуйте!</h2>
            <p className="welcome__description">Пожалуйста, авторизуйтесь.</p>
            <button type="button" className="welcome__button" onClick={(evt) => handleWelcomeButton(evt, 'login')}>Вход</button>
          </div>
        :
          <div>
            <h2 className="welcome__header">{userName}</h2>
            <p className={`welcome__description${getClassByRole(roles.find((role) => role === 'SCOPE_read' || role === 'SCOPE_write'))}
            `}>Время</p>
            <button type="button" className="welcome__button" onClick={(evt) => handleWelcomeButton(evt, 'logout')}>Выход</button>
          </div>
        }
      </div>
    </section>
  );
};

export default Welcome;
