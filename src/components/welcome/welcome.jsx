import * as React from 'react';

const Welcome = () => {
    return (
      <section className="welcome">
        <div className="welcome__wrapper">
          <h2 className="welcome__header">Здравствуйте! Пожалуйста, авторизуйтесь.</h2>
          <button type="button" className="welcome__button">Авторизоваться</button>
        </div>
      </section>
    );
};

export default Welcome;
