import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "../Accounts/User";
import PropTypes from "prop-types";
import Router from "next/router";

/* GraphQl Query  */

/* Mutation Query */
const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $password: String!
    $confirmPassword: String!
    $resetToken: String!
  ) {
    resetUserPassword(
      password: $password
      confirmPassword: $confirmPassword
      resetToken: $resetToken
    ) {
      id
      email
      name
    }
  }
`;

class ResetPassword extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired,
  };
  state = {
    password: "",
    confirmPassword: "",
  };
  addToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={RESET_PASSWORD_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(reset, { error, loading, called }) => (
          <form
            className="forms"
            onSubmit={async e => {
              e.preventDefault();
              await reset();
              this.setState({
                password: "",
                confirmPassword: "",
              });
              Router.push({
                pathname: "/store",
              });
            }}
            method="post"
          >
            <h1 className="header1">Change Your Password</h1>
            <span>Enter and confirm your password</span>
            <Error error={error} />
            {!error && !loading && called && (
              <>
                <p>Success✅ - Redirecting...</p>
              </>
            )}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              autoFocus
              value={this.state.password}
              onChange={this.addToState}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              value={this.state.confirmPassword}
              onChange={this.addToState}
            />
            <button className="btn" type="submit">
              Sav{loading ? "ing" : "e"} Changes
            </button>
          </form>
        )}
      </Mutation>
    );
  }
}
export default ResetPassword;
