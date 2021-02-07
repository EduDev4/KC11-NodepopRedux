import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import storage from './utils/storage';
import { configureStore } from './store';

import { configureClient } from './api/client';

import App, { Root } from './components/App';

import './index.css';

const { token } = storage.get('auth') || { token: null };
const filters = storage.get('filters') || undefined;

configureClient(token);

const history = createBrowserHistory();
const store = configureStore({ auth: !!token, filters }, { history, storage });

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <div>Something went wrong!</div>;
    }

    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <Root history={history} store={store}>
      <App />
    </Root>
  </ErrorBoundary>,
  document.getElementById('root'),
);
