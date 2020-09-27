import * as React from 'react';
import Welcome from '../welcome/welcome.jsx';

const Main = () => {
    return (
      <main className="page__main">
        <h1 className="visually-hidden">CDU</h1>
        <Welcome/>
      </main>
    );
};

export default Main;
