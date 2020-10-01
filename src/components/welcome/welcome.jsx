import * as React from 'react';
import Timer from '../timer/timer.jsx';
import PropTypes from 'prop-types';
import {getClassByRole, ROLE_NAME, BUTTON_FUNCTION} from '../../utils.js';

const Welcome = (props) => {
  const {handleWelcomeButton, isAuthorized, realmAccess, token} = props;

  return (
    <section className="welcome">
      <div className="welcome__wrapper">
        {!isAuthorized ?
          <div>
            <h2 className="welcome__header">Здравствуйте!</h2>
            <p className="welcome__description">Пожалуйста, авторизуйтесь.</p>
            <button type="button" className="welcome__button" onClick={(evt) => handleWelcomeButton(evt, BUTTON_FUNCTION.LOGIN)}>Вход</button>
          </div>
          :
          <div>
            <h2 className="welcome__header">{token.preferred_username}</h2>
            <div className={`welcome__description${getClassByRole(realmAccess.roles.find((role) => role === ROLE_NAME.SCOPE_READ || role === ROLE_NAME.SCOPE_WRITE))}
            `}>
              <Timer
                exp={token.exp}
              />
            </div>
            <button type="button" className="welcome__button" onClick={(evt) => handleWelcomeButton(evt, BUTTON_FUNCTION.LOGOUT)}>Выход</button>
          </div>
        }
      </div>
    </section>
  );
};

Welcome.propTypes = {
  handleWelcomeButton: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  realmAccess: PropTypes.object,
  token: PropTypes.object
};

export default Welcome;
