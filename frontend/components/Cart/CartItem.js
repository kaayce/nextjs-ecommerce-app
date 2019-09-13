/* This component displays each item  added
to the Cartin Cart.js */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import formatMoney from "../../lib/formatMoney";
import RemoveItemFromCartButton from "./RemoveItemFromCart";
import Table from "../styles/Table";

const CartItem = ({ cartItem }) => {
  const styles = { border: "none" };
  //does item exist
  if (!cartItem.item)
    return (
      <StyledCartItems>
        This Item is Unavailable
        <RemoveItemFromCartButton id={cartItem.id} />
      </StyledCartItems>
    );
  return (
    <StyledCartItems>
      <img src={cartItem.item.image} alt={cartItem.item.title} width="100" />
      <div className="cart-item-details">
        <h3>{cartItem.item.title}</h3>
        <Table style={{ border: "none", textAlign: "center" }}>
          <thead>
            <tr>
              <th style={styles}>Quantity</th>
              <th style={styles}>Unit Price</th>
              <th style={styles}>SubTotal</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ hover: { transform: "scale(1.1)" } }}>
              <td style={styles}>{cartItem.quantity}</td>
              <td style={styles}>{formatMoney(cartItem.item.price)} </td>
              <td style={styles}>
                {formatMoney(cartItem.item.price * cartItem.quantity)}{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <RemoveItemFromCartButton id={cartItem.id} />
    </StyledCartItems>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};
/* Styled Component */

const StyledCartItems = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
    :hover {
      transform: scale(1.05);
    }
  }
  h3,
  p {
    margin: 0;
    font-family: "Montserrat";
  }
`;

export default CartItem;
