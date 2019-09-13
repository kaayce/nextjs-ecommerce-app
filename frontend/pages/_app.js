/* App wrapper component (state & initialization) ️ */

// imports
import App, { Container } from "next/app";
import PropTypes from "prop-types";
import { ApolloProvider } from "react-apollo";

import withData from "../lib/withData";
import Page from "../components/Page";
// import "../static/css/index.css";
// App Component
class AppInit extends App {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // expose queries to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    // Component passed down via props 🔻
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

AppInit.propTypes = {};

export default withData(AppInit);
/* App wrapper component ️ */
