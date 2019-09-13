/* Display Single Product inn page */

import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import styled from "styled-components";
import Head from "next/head";
import Error from "../ErrorMessage";
import formatMoney from "../../lib/formatMoney";
import AddToCartButton from "../Cart/AddToCart";

const SingleItemStyles = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
  padding: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 2rem;
    font-size: 1.5rem;
  }
`;
const MainContainer = styled.div`
  margin: 10px auto;
  padding: 10px auto;
`;
const ItemContainer = styled.div`
  margin: 20px;
  text-align: center;
`;
const Wrapper = styled.div`
  /* This renders the buttons above...  */
  outline: none;
  button {
    display: inline-block;
    border-radius: 20px;
    width: 11rem;
    text-align: center;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.9);
    color: black;
    border: 2px solid green;
    margin: 1rem 1em;
    padding: 0.6em 1em;
    transition: 0.5s all ease-out;
    width: 17rem;
    text-align: center;

    &:hover {
      background: green;
      color: ${props => props.theme.offWhite};
      border: none;
    }
  }
`;
const GET_SINGLE_PRODUCT_QUERY = gql`
  query GET_SINGLE_PRODUCT_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      vendor
      price
      category
      largeImage
    }
  }
`;
class DisplaySingleProduct extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query
        query={GET_SINGLE_PRODUCT_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item)
            return <p>No Product Found for ID: {this.props.id}</p>;
          const product = data.item;
          return (
            <MainContainer>
              <SingleItemStyles>
                <Head>
                  <title>Denovo | {product.title}</title>
                </Head>
                <ItemContainer>
                  {" "}
                  <img src={product.largeImage} alt={product.title} />
                </ItemContainer>
                <ItemContainer
                  style={{
                    boxShadow: "lightGrey",
                  }}
                >
                  {" "}
                  <div className="details">
                    <h2> {product.title}</h2>
                    <p>
                      Powered by:{" "}
                      <span className="underline">{product.vendor}</span>
                    </p>
                    <p> {formatMoney(product.price)}</p>
                    <p>{product.description}</p>
                  </div>
                  <Wrapper>
                    <AddToCartButton id={id} />
                  </Wrapper>
                </ItemContainer>
              </SingleItemStyles>
            </MainContainer>
          );
        }}
      </Query>
    );
  }
}

export default DisplaySingleProduct;
