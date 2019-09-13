/* Admin edit/delete Products Component for all items */

import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import AdminProduct from "./AdminProduct";
import ProductPagination from "./ProductPagination";
import { perPage } from "../../config";
/* Our GraphQL queries */

// GET_ALL_PRODUCTS_QUERY
const GET_ALL_PRODUCTS_QUERY = gql`
  query GET_ALL_PRODUCTS_QUERY ($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      description
      vendor
      category
      price
      image
      largeImage
    }
  }
`;

/* Our GraphQL queries  end */

class Products extends Component {
  render() {
    return (
      <MainWrapper>
        <ProductPagination page={this.props.page} />
        <Query
          query={GET_ALL_PRODUCTS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage,
          }}
        >
          {/* Dev Note: To avoid errors, the only child of Query component
           *   must be a function/render prop
           *   we get a 'payload' from our graphql query
           *   destructured to 'data', 'error', 'loading' variables
           * **/}
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ProductsList>
                {data.items.map(item => (
                  <AdminProduct item={item} key={item.id} />
                ))}
              </ProductsList>
            );
          }}
        </Query>
        <ProductPagination page={this.props.page} />
        <br /> <br />
      </MainWrapper>
    );
  }
}

/* Our styled components */
const MainWrapper = styled.div`
  text-align: center;
`;
const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin: 20px 40px;
  padding-bottom: 30px;
`;

export default Products;
export { GET_ALL_PRODUCTS_QUERY };
