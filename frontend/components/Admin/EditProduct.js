import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import styled from "styled-components";

import Form from "../styles/Form";
import formatMoney from "../../lib/formatMoney";
import Error from "../ErrorMessage";

const GET_SINGLE_PRODUCT_QUERY = gql`
  query GET_SINGLE_PRODUCT_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
      category
      vendor
    }
  }
`;
const EDIT_PRODUCT_MUTATION = gql`
  mutation EDIT_PRODUCT_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
    $category: String
    $vendor: String
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
      category: $category
      vendor: $vendor
    ) {
      id
      title
      description
      price
      category
      vendor
    }
  }
`;
const MainWrapper = styled.div`
  margin: 20px 50px;
  padding: 10px 10px;
`;

class EditProduct extends Component {
  state = {};
  updateState = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  // form onSubmit func for updating item
  updateProduct = async (e, updateProductMutation) => {
    e.preventDefault();
    const res = await updateProductMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
  };

  render() {
    return (
      <MainWrapper>
        <Query
          query={GET_SINGLE_PRODUCT_QUERY}
          variables={{
            id: this.props.id,
          }}
        >
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!data.item) return <p>No Item Found for ID {this.props.id}</p>;
            return (
              <Mutation mutation={EDIT_PRODUCT_MUTATION} variables={this.state}>
                {(updateItem, { loading, error }) => (
                  <Form onSubmit={e => this.updateProduct(e, updateItem)}>
                    <h2>Edit Product</h2>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="title">
                        Title
                        <input
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          required
                          defaultValue={data.item.title}
                          onChange={this.updateState}
                        />
                      </label>
                      <label htmlFor="vendor">
                        Product Vendor
                        <input
                          type="text"
                          id="vendor"
                          name="vendor"
                          placeholder="Product Vendor"
                          required
                          defaultValue={data.item.vendor}
                          onChange={this.updateState}
                        />
                      </label>
                      <label htmlFor="price">
                        Price
                        <input
                          type="number"
                          id="price"
                          name="price"
                          placeholder="Price"
                          required
                          defaultValue={data.item.price}
                          onChange={this.updateState}
                        />
                      </label>
                      <label htmlFor="category">
                        Product Category
                        <select
                          name="category"
                          id="category"
                          placeholder="Select Category"
                          required
                          defaultValue={data.item.category}
                          value={this.state.category}
                          onChange={this.updateState}
                        >
                          <option value="Endpoint Security">
                            Endpoint Security
                          </option>
                          <option value="Database Security">
                            Database Security
                          </option>
                          <option value="Network Security">
                            Network Security
                          </option>
                          <option value="Backup & Recovery">
                            Backup & Recovery
                          </option>
                          <option value="Email Archiving">
                            Email Archiving
                          </option>
                          <option value="Security Assessments">
                            Security Assessments
                          </option>
                          <option value="Security Trainings">
                            Security Trainings
                          </option>
                        </select>
                      </label>
                      <label htmlFor="description">
                        Description
                        <textarea
                          id="description"
                          rows="3"
                          name="description"
                          placeholder="Enter A Description"
                          required
                          defaultValue={data.item.description}
                          onChange={this.updateState}
                        />
                      </label>
                      <button type="submit">
                        Sav{loading ? "ing" : "e"} Changes
                      </button>
                    </fieldset>
                  </Form>
                )}
              </Mutation>
            );
          }}
        </Query>
      </MainWrapper>
    );
  }
}

export default EditProduct;
export { EDIT_PRODUCT_MUTATION, MainWrapper };
