/* This component adds items to cart */

import React from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../Accounts/User";
import styled from "styled-components";

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;
class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading, error }) => (
          <AddItem
            disabled={loading}
            onClick={addToCart}
            style={{ cursor: "pointer" }}
          >
            Add{loading && "ing"} to Cart 🛒
          </AddItem>
        )}
      </Mutation>
    );
  }
}
const AddItem = styled.button`
  :hover {
    background: ${props => props.theme.red};
    color: white;
  }
`;

export default AddToCart;
