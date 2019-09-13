/* Remove from Cart component for handling adding of item to cart */
import React from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import PropTypes from "prop-types";

import { CURRENT_USER_QUERY } from "../Accounts/User";

/* Remove from Cart Mutation */
const REMOVE_ITEM_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const RemoveButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
    transform: scale(1.1);
  }
`;

class RemoveItemFromCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  // gets called as soon as soon as the server sends us a response
  // after a mutation has been performed
  update = (cache, payload) => {
    // retrieve item from the cache
    const data = cache.readQuery({
      query: CURRENT_USER_QUERY,
    });
    //remove item from the cache
    const cartItemId = payload.data.removeFromCart.id;
    data.currentUser.cart = data.currentUser.cart.filter(
      cartItem => cartItem.id !== cartItemId,
    );
    //write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={REMOVE_ITEM_FROM_CART_MUTATION}
        update={this.update}
        optimisticResponse={{
          __typename: "Mutation",
          removeFromCart: {
            __typename: "CartItem",
            id: this.props.id,
          },
        }}
        variables={{ id: this.props.id }}
      >
        {(removeFromCart, { loading, error }) => (
          <RemoveButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message));
            }}
            title="Delete Item"
          >
            &times;
          </RemoveButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveItemFromCart;
