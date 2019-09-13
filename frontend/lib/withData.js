/* This file is our config for our apollo client */
import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

import {
  GET_LOCALSTATE_QUERY,
  TOGGLE_CART_MUTATION,
} from "../components/Cart/Cart";
import { endpoint } from "../config";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
    /* this makes local state data visible to apollo
      we store cart data here..
       and resolve via the frontend/client */
    clientState: {
      defaults: { isCartOpen: true },
      resolvers: {
        Mutation: {
          // first param is to hold a null.. pls dont delete
          // check documentatiion to confirm this
          // 3rd parram is a client object destructured to {cache}
          toggleCart(_, variables, { cache }) {
            // get the isCartOpen from cache
            const { isCartOpen } = cache.readQuery({
              query: GET_LOCALSTATE_QUERY,
            });
            // toggle cart state
            const data = {
              data: { isCartOpen: !isCartOpen },
            };
            // set data in cache
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        isCartOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
