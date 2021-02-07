import React from 'react';
import T from 'prop-types';

import './FormField.css';

const FormField = ({ children, label, ...props }) => (
  <div className="formField-label" {...props}>
    <span>{label}</span>
    {children}
  </div>
);

FormField.propTypes = {
  children: T.node,
  label: T.node,
};

export default FormField;
