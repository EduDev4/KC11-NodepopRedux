import React from 'react';
import T from 'prop-types';
import { Button, Checkbox, Input as AntdInput } from 'antd';

import { Form, Input } from '../../shared/Form';

const LoginForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={{
      email: '',
      password: '',
      remember: false,
    }}
  >
    {({ values: { email, password } }) => (
      <React.Fragment>
        <Input name="email" placeholder="Email" component={AntdInput} />
        <Input
          name="password"
          placeholder="Password"
          component={AntdInput.Password}
        />
        <Input type="checkbox" name="remember" component={Checkbox}>
          Remember me
        </Input>
        <br></br>
        <Button
          htmlType="submit"
          className="loginPage-submit"
          variant="primary"
          disabled={!email || !password}
        >
          Log in
        </Button>
      </React.Fragment>
    )}
  </Form>
);

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default LoginForm;
