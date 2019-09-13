/* SignOut component */

import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import User, { CURRENT_USER_QUERY } from "../Accounts/User";
import Router from "next/router";

/* Mutation */
const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signOutUser {
      message
    }
  }
`;
class SignOut extends React.Component {
  render() {
    return (
      <Mutation
        mutation={SIGNOUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {signOutUser => (
          <button
            onClick={() => {
              signOutUser();
              Router.push({
                pathname: "/",
              });
            }}
          >
            Sign Out
          </button>
        )}
      </Mutation>
    );
  }
}

export default SignOut;
