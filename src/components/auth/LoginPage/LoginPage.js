/* o Formulario con inputs para recoger email y password del usuario.
o Checkbox “Recordar contraseña” mediante el que indicaremos que guardamos en el
localStorage los datos de la session de usuario, evitando tener que introducir
credenciales en cada visita la sitio */
import React from 'react';
import T from 'prop-types';

import './LoginPage.css';
import { Alert } from 'antd';

import LoginForm from './LoginForm';

const LoginPage = ({ error, onErrorClose, onLogin }) => (
  <div className="loginPage">
    <div className="loginPage-container">
      <h1 className="loginPage-title">Log in to Nodepop</h1>
      <LoginForm onSubmit={onLogin} />
      {error && (
        <Alert
          afterClose={onErrorClose}
          closable
          message={error}
          showIcon
          type="error"
        />
      )}
    </div>
  </div>
);

LoginPage.propTypes = {
  onLogin: T.func.isRequired,
  onErrorClose: T.func.isRequired,
};

export default LoginPage;
