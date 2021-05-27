import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// {I have tried to use the this component was made using the code  npm-react-router-guard, but it didn't work out,so I used the
// https://codesandbox.io/s/strange-khorana-6oysl?file=/src/components/ProtectedRoute. code to set the protected route

const ProtectedRoute = ({
    path,
    component: Component,
    authedUser,
    ...rest
  }) => {
    return (
      <Route
        path={path}
        {...rest}
        render={(props) => {
          if (authedUser) {
            return Component ? <Component {...props} /> : render(props);
          }
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }}
      />
    );
  };
  
  const mapStateToProps = (authedUser) => {
    return {
      authedUser
    };
  };
  
  export default connect(mapStateToProps)(ProtectedRoute);
      
