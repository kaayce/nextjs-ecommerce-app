/* Delete Individual Product */
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { GET_ALL_PRODUCTS_QUERY } from "../Store/Products";

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteProduct extends Component {
  update = (cache, payload) => {
    // refreshes and update cache on client.. so it matches server data
    // 1. Retrieve items from cache
    const data = cache.readQuery({ query: GET_ALL_PRODUCTS_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted item out of the page
    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id,
    );
    // 3. retrieve items to list on page
    // {data: data}  obj as second query
    cache.writeQuery({ query: GET_ALL_PRODUCTS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_PRODUCT_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <button
            style={{ cursor: "pointer", outline: "none" }}
            onClick={() => {
              if (confirm("Are you sure you want to delete this product?")) {
                deleteItem().catch(error => {
                  alert(error.message);
                });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteProduct;

/* Delete Individual Product */
