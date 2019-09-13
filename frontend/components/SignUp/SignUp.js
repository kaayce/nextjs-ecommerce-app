import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "../Accounts/User";

/* Mutation Query */
const SIGNUP_USER_MUTATION = gql`
  mutation SIGNUP_USER_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signUpUser(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    email: "",
  };
  addToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_USER_MUTATION}
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
                name: "",
                email: "",
                password: "",
              });
            }}
            method="post"
          >
            <h1 className="header1">Create Account</h1>
            <span>or use your email for registration</span>
            <Error
              error={
                <span>
                  This email has been used to create an existing account
                </span>
              }
            />
            <input
              type="text"
              placeholder="First, then Last Name"
              name="name"
              required
              autoFocus
              value={this.state.name}
              onChange={this.addToState}
            />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              style={{ textTransform: "lowercase" }}
              required
              value={this.state.email}
              onChange={this.addToState}
            />
            <input
              type="password"
              placeholder="Enter Password"
              title="Atleast 6 characters with one capital letter"
              name="password"
              required
              value={this.state.password}
              onChange={this.addToState}
            />
            <button className="btn" type="submit">
              Sign{loading ? "ing" : ""} Up
            </button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default SignUp;
