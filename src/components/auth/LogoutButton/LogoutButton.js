import React from 'react';
import T from 'prop-types';

import ConfirmationButton from '../../shared/ConfirmationButton';

const LogoutButton = ({ onLogout, ...props }) => (
  <ConfirmationButton
    shape="round"
    confirmationButtonProps={{
      title: 'Close session?',
      okText: 'Yes',
      cancelText: 'No',
      okButtonProps: {
        danger: true,
      },
    }}
    onConfirm={onLogout}
    {...props}
  />
);

LogoutButton.propTypes = {
  onLogout: T.func.isRequired,
};

export default LogoutButton;
