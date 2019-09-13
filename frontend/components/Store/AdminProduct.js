/* Admin view of edit/delete buttons for single item */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Title from "../styles/Title";
import ProductStyles from "../styles/ItemStyles";
import PriceTag from "../styles/PriceTag";
import formatMoney from "../../lib/formatMoney";
import DeleteProduct from "../Admin/DeleteProduct";
import AddToCartButton from "../Cart/AddToCart";

export default class AdminProduct extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ProductStyles>
        {item.image && <img src={item.image} alt={item.title} />}

        <Title>
          <Link
            prefetch
            href={{
              pathname: "/product",
              query: { id: item.id },
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>

        <div className="buttonList">
          <Link
            prefetch
            href={{
              pathname: "update",
              query: { id: item.id },
            }}
          >
            <a>Edit Item ✏️</a>
          </Link>
          <DeleteProduct id={item.id}>Delete This Item</DeleteProduct>
        </div>
      </ProductStyles>
    );
  }
}

/* Product Component for single item */
