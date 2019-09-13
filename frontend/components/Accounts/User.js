/* User component to handle all User specifics */

import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

/* Query */
const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      id
      name
      email
      companyName
      address
      state
      country
      phoneNo
      createdAt
      permissions
      cart {
        id
        quantity
        item {
          id
          image
          title
          price
          vendor
          description
          category
        }
      }
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };
