import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import Link from "next/link";

/* GraphQl Query  */

/* Mutation Query */
const REQUEST_RESET_TOKEN_MUTATION = gql`
  mutation REQUEST_RESET_TOKEN_MUTATION($email: String!) {
    requestToken(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: "",
  };
  addToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation mutation={REQUEST_RESET_TOKEN_MUTATION} variables={this.state}>
        {(reset, { error, loading, called }) => (
          <form
            className="forms"
            onSubmit={async e => {
              e.preventDefault();
              await reset();
              this.setState({
                email: "",
              });
            }}
            method="post"
          >
            <h1 className="header1">Request new Password</h1>
            <span>Enter your email</span>
            <Error error={error} />
            {!error && !loading && called && (
              <>
                <p>Success✅</p>
                <p>
                  Please check your email for a <strong>reset link</strong>{" "}
                </p>
              </>
            )}
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
            <button className="btn" type="submit">
              Request{loading ? "ing" : ""} Password
            </button>
          </form>
        )}
      </Mutation>
    );
  }
}
export default RequestReset;
