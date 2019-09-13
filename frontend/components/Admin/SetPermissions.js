import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";

import PropTypes from "prop-types";

import Error from "../ErrorMessage";

import Table from "../styles/Table";
import Button from "../styles/SickButton";

const userPermissions = [
  "ADMIN_SUPER",
  "USER",
  "ADMIN_CREATE",
  "ADMIN_DELETE",
  "ADMIN_UPDATE",
  "PERMISSION_UPDATE",
];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

const GET_ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const SetPermissions = props => (
  <Query query={GET_ALL_USERS_QUERY}>
    {({ data, loading, error }) => (
      <div>
        <Error error={error} />
        <div>
          <h2>Manage User Permissions</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {userPermissions.map(permission => (
                  <th key={permission}>{permission}</th>
                ))}
                <th>Save🔻</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <UserPermissions user={user} key={user.id} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )}
  </Query>
);

class UserPermissions extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array,
    }).isRequired,
  };
  state = {
    permissions: this.props.user.permissions,
  };
  handlePermissionChange = (e, updatePermissions) => {
    const checkbox = e.target;
    // make copy of permissions so as not to mutate state
    let updatedPermissions = [...this.state.permissions];
    // does permissions exist dor user
    if (checkbox.checked) {
      // add it
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        permission => permission !== checkbox.value,
      );
    }
    this.setState({ permissions: updatedPermissions }, updatePermissions);
  };
  render() {
    const user = this.props.user;
    return (
      <Mutation
        mutation={UPDATE_PERMISSIONS_MUTATION}
        variables={{
          permissions: this.state.permissions,
          userId: this.props.user.id,
        }}
      >
        {(updatePermissions, { loading, error }) => (
          <>
            {error && (
              <tr>
                <td colspan="8">
                  <Error error={error} />
                </td>
              </tr>
            )}
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {userPermissions.map(permission => (
                <td key={permission}>
                  <label htmlFor={`${user.id}-permission-${permission}`}>
                    <input
                      id={`${user.id}-permission-${permission}`}
                      type="checkbox"
                      checked={this.state.permissions.includes(permission)}
                      value={permission}
                      onChange={e =>
                        this.handlePermissionChange(e, updatePermissions)
                      }
                    />
                  </label>
                </td>
              ))}
              <td>
                <Button
                  type="button"
                  disabled={loading}
                  onClick={updatePermissions}
                >
                  Sav{loading ? "ing" : "e"}
                </Button>
              </td>
            </tr>
          </>
        )}
      </Mutation>
    );
  }
}

export default SetPermissions;
