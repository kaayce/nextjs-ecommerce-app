/* Cart component for handling adding of item to cart */
import React from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import StyledCart from "../styles/CartStyles";
import CloseButton from "../styles/CloseButton";
import CheckOutButton from "../styles/SickButton";
import User from "../Accounts/User";
import CartItem from "./CartItem";
import formatMoney from "../../lib/formatMoney";
import calcTotalPrice from "../../lib/calcTotalPrice";

/* Our Query to get data from our local state */
const GET_LOCALSTATE_QUERY = gql`
  query GET_LOCALSTATE_QUERY {
    isCartOpen @client
  }
`;
const TOGGLE_CART_MUTATION = gql`
  mutation TOGGLE_CART_MUTATION {
    toggleCart @client
  }
`;

const Cart = props => (
  <User>
    {({ data: { currentUser } }) => {
      if (!currentUser) return null;
      return (
        <Mutation mutation={TOGGLE_CART_MUTATION}>
          {toggleCart => (
            <Query query={GET_LOCALSTATE_QUERY}>
              {({ data, loading, error }) => (
                <StyledCart open={data.isCartOpen}>
                  <header>
                    <CloseButton title="Close Cart" onClick={toggleCart}>
                      &times;
                    </CloseButton>
                    <Bold>{currentUser.name.split(" ")[0]}'s Cart</Bold>
                    <p>
                      You have {currentUser.cart.length} item
                      {currentUser.cart.length > 1 ? "s" : ""} in your cart
                    </p>
                  </header>
                  <ul>
                    {currentUser.cart.map(cartItem => (
                      <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        // currentUser={currentUser}
                      />
                    ))}
                  </ul>
                  <h3>Total:</h3>
                  <footer>
                    <p>{formatMoney(calcTotalPrice(currentUser.cart))}</p>
                    <CheckOutButton>Checkout</CheckOutButton>
                  </footer>
                </StyledCart>
              )}
            </Query>
          )}
        </Mutation>
      );
    }}
  </User>
);
const Bold = styled.h3`
  color: ${props => props.theme.red};
  display: inline-block;
  padding: 4px 5px;
  margin: 0;
  font-size: 4rem;
  :hover {
    transform: scale(1.1);
  }
`;

export default Cart;
export { GET_LOCALSTATE_QUERY, TOGGLE_CART_MUTATION };
