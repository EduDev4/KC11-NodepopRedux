import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUi } from '../store/selectors';

const defaultRenderLoading = () => <div>"Loading..."</div>;

function withDataLoad({
  renderLoading = defaultRenderLoading,
  renderError = () => null,
  noRender = () => false,
}) {
  return function (WrappedComponent) {
    const ComponentWithDataLoad = ({ onLoad, error, loading, ...props }) => {
      useEffect(() => {
        onLoad();
      }, [onLoad]);

      if (loading) {
        return renderLoading();
      }
      if (error) {
        return renderError(error, { reload: onLoad });
      }
      if (noRender(props)) {
        return null;
      }
      return <WrappedComponent {...props} />;
    };

    return connect(getUi)(ComponentWithDataLoad);
  };
}

export default withDataLoad;
