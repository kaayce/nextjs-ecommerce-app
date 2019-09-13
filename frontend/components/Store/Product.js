/* Product Component for single item */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Title from "../styles/Title";
import ProductStyles from "../styles/ItemStyles";
import PriceTag from "../styles/PriceTag";
import formatMoney from "../../lib/formatMoney";
import DeleteProduct from "../Admin/DeleteProduct";
import AddToCartButton from "../Cart/AddToCart";

export default class Product extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ProductStyles>
        <Link
          prefetch
          href={{
            pathname: "/product",
            query: { id: item.id },
          }}
        >
          {item.image && <img src={item.image} alt={item.title} />}
        </Link>

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
        <p />
        {/* <p>Powered{item.description}</p> */}
        <br />
        <div className="buttonList">
          <AddToCartButton id={item.id} />
        </div>
      </ProductStyles>
    );
  }
}

/* Product Component for single item */
