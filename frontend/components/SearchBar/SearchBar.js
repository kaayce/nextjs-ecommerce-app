import React from "react";
import Downshift, { resetIdCounter } from "downshift";
import Router from "next/router";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { DropDown, DropDownItem, SearchStyles } from "../styles/DropDown";

/* Our Query */
const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchText: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchText }
          { description_contains: $searchText }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;

function routeToItemPage(item) {
  Router.push({
    pathname: "/product",
    query: {
      id: item.id,
    },
  });
}

class SearchBar extends React.Component {
  state = {
    items: [],
    loading: false,
  };
  onChange = debounce(async (e, client) => {
    // toggle loading state
    this.setState({ loading: true });
    // we manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchText: e.target.value },
    });
    this.setState({
      items: res.data.items,
      loading: false,
    });
  }, 400);
  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift
          onChange={routeToItemPage}
          itemToString={item => (item === null ? "" : item.title)}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
          }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: "search",
                      placeholder: "Search for a Service 🔍",
                      id: "search",
                      className: this.state.loading ? "loading" : "",
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img width="50" src={item.image} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {!this.state.items.length && !this.state.loading && (
                    <DropDownItem>
                      {" "}
                      No Item Found For: {inputValue}
                    </DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default SearchBar;
