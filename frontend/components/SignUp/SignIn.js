import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "../Accounts/User";
import Link from "next/link";
import Router from "next/router";

/* GraphQl Query  */

/* Mutation Query */
const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  addToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNIN_USER_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signUpUser, { error, loading }) => (
          <form
            className="forms"
            onSubmit={async e => {
              e.preventDefault();
              await signUpUser();
              this.setState({
                email: "",
                password: "",
              });
              Router.push({
                pathname: "/store",
              });
            }}
            method="post"
          >
            <h1 className="header1">Sign In</h1>
            <span>or use your account</span>
            <Error error={error} />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              autoFocus
              style={{ textTransform: "lowercase" }}
              value={this.state.email}
              onChange={this.addToState}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.addToState}
            />
            <Link href="/request-password">
              <a
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "dotted",
                }}
              >
                Forgot your password?
              </a>
            </Link>
            <button className="btn" type="submit">
              Sign{loading ? "ing" : ""} In
            </button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default SignIn;
