import React from 'react';
import T from 'prop-types';
import Layout from '../../layout';

import NewAdvertForm from './NewAdvertForm';
import './NewAdvertPage.css';

import { Alert } from 'antd';
import 'antd/dist/antd.css';

const NewAdvertPage = ({ error, onErrorClose, onCreate }) => (
  <Layout title="Selling something?">
    <div className="form-wrapper" style={{ borderBottomWidth: 10 }}>
      <div className="form-container">
        <NewAdvertForm onSubmit={onCreate} />
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
  </Layout>
);

NewAdvertPage.propTypes = {
  history: T.shape({ push: T.func.isRequired }).isRequired,
};

export default NewAdvertPage;
