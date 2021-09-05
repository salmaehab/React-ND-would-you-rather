import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ exact, path, authedUser, component: Component }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={props => {
        if (authedUser !== null) {
          return <Component {...props} />;
        } else {
          alert("Please Login First");
          return (
            <Redirect
              to={{ pathname: "/login", state: { 
                
                from: props.location }}}
            />
          );
        }
        
      }}
    />
  );
};

export default connect(({ authedUser }) => ({ authedUser }))(ProtectedRoute);
