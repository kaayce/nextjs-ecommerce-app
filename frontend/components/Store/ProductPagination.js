import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";

import PaginationStyles from "../styles/PaginationStyles";
import { perPage } from "../../config";

const PRODUCT_PAGINATION_QUERY = gql`
  query PRODUCT_PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const ProductPagination = props => (
  <Query query={PRODUCT_PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      const pageCount = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(pageCount / perPage);
      const page = props.page;
      return (
        <PaginationStyles>
          <Head>
            <title>
              Denovo — Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "products",
              query: { page: page - 1 },
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p>
            Page {props.page} of {pages}
          </p>
          <Link
            prefetch
            href={{
              pathname: "products",
              query: { page: page + 1 },
            }}
          >
            <a className="prev" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default ProductPagination;
