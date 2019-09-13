/* Add Product to db */
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";

import Form from "../styles/Form";
import Error from "../ErrorMessage";
import formatMoney from "../../lib/formatMoney";

const ADD_PRODUCT_MUTATION = gql`
  mutation ADD_PRODUCT_MUTATION(
    $title: String!
    $description: String!
    $vendor: String
    $category: String
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      vendor: $vendor
      category: $category
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class AddProduct extends Component {
  state = {
    title: "",
    description: "",
    category: "",
    vendor: "",
    price: 0,
    image: "",
    largeImage: "",
  };
  addToState = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadImage = async e => {
    console.log("Uploading image...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ethnosmss");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ethnos/image/upload",
      {
        method: "POST",
        body: data,
      },
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };
  categories = [];

  render() {
    return (
      <MainWrapper>
        <Mutation mutation={ADD_PRODUCT_MUTATION} variables={this.state}>
          {(createItem, { loading, error }) => (
            <Form
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                // call the mutation
                const res = await createItem();
                // change them to the single item page
                // console.log(res);
                Router.push({
                  pathname: "/product",
                  query: { id: res.data.createItem.id },
                });
              }}
            >
              <h2>Add Product</h2>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Product Title"
                    required
                    value={this.state.title}
                    onChange={this.addToState}
                  />
                </label>
                <label htmlFor="vendor">
                  Vendor
                  <input
                    type="text"
                    name="vendor"
                    id="vendor"
                    placeholder="Vendor Name"
                    value={this.state.vendor}
                    onChange={this.addToState}
                  />
                </label>
                <label htmlFor="price">
                  Price
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Product Price (kobo)"
                    required
                    value={this.state.price}
                    onChange={this.addToState}
                  />
                </label>
                <label htmlFor="file">
                  Product Image
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    id="file"
                    required
                    onChange={this.uploadImage}
                  />
                  {this.state.image && (
                    <img
                      width="50"
                      src={this.state.image}
                      alt="Image Preview"
                    />
                  )}
                </label>
                <label htmlFor="category">
                  Product Category
                  <select
                    name="category"
                    id="category"
                    placeholder="Select Category"
                    required
                    value={this.state.category}
                    onChange={this.addToState}
                  >
                    <option value="Endpoint Security">Endpoint Security</option>
                    <option value="Database Security">Database Security</option>
                    <option value="Network Security">Network Security</option>
                    <option value="Backup & Recovery">Backup & Recovery</option>
                    <option value="Email Archiving">Email Archiving</option>
                    <option value="Security Assessments">
                      Security Assessments
                    </option>
                    <option value="Security Trainings">
                      Security Trainings
                    </option>
                  </select>
                </label>
                <label htmlFor="description">
                  Product Description
                  <textarea
                    rows="4"
                    cols="50"
                    name="description"
                    id="description"
                    placeholder="Product description"
                    value={this.state.description}
                    onChange={this.addToState}
                  />
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </MainWrapper>
    );
  }
}
const MainWrapper = styled.div`
  margin: 20px 50px;
  padding: 10px 10px;
`;
export default AddProduct;
export { ADD_PRODUCT_MUTATION };
/* Add Product to db */
