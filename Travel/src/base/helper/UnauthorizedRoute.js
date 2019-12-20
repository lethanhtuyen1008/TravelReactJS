import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class UnauthorizedRoute extends React.Component {
  render() {
    const { component: Component, authUser, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={renderProps => {
          if (authUser === null) return <Component {...renderProps} />;
          return <Redirect to='/' />;
        }}
      />
    );
  }
}

export default
  connect(
    state => ({
      authUser: state.AuthReducer.authUser
    }),
    null
  )(UnauthorizedRoute)
;
