import './App.css';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PrivateRoute, LoginPage } from '../auth';
import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';

const App = () => (
  /*const [loggedUserEmail, setLoggedUserEmail] = useState(
    initiallyLooggedUserId,
  );

  const handleLogin = loggedUserEmail =>
    new Promise(resolve => {
      setLoggedUserEmail(loggedUserEmail);
      resolve();
    });
  const handleLogout = () => setLoggedUserEmail(null);

  return (
    <AuthContextProvider
      value={{
        isLogged: !!loggedUserEmail,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >*/
  <div className="App">
    <Switch>
      <Route path="/" exact>
        <Redirect to="/adverts" />
      </Route>
      <Route path="/login" exact component={LoginPage} />
      <PrivateRoute path="/adverts" exact>
        <AdvertsPage />
      </PrivateRoute>
      <PrivateRoute path="/advert/new" exact component={NewAdvertPage} />
      <PrivateRoute path="/adverts/:id" exact component={AdvertPage} />
      {/* {({ history }) => <LoginPage onLogin={handleLogin} history={history} />}
      </Route> */}
      <Route path="/404" exact>
        <div
          style={{
            textAlign: 'center',
            fontSize: 48,
            fontWeight: 'bold',
          }}
        >
          404 Page not found
        </div>
      </Route>
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  </div>
  //</AuthContextProvider>
);

export default App;
