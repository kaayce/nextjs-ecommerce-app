/* Store Nav   ️ */

import React from "react";
import { Mutation } from "react-apollo";

// file imports
import { TOGGLE_CART_MUTATION } from "../Cart/Cart";
import Link from "next/link";
import NavStyles from "../styles/NavStyles";
import User from "../Accounts/User";
import SignOut from "../SignUp/SignOut";
import CountCartItems from "../Cart/CountCartItems";
const Nav = props => {
  return (
    <User>
      {({ data: { currentUser } }) => (
        <NavStyles>
          <Link href="/store" prefetch>
            <a>Home</a>
          </Link>
          <Link href="/products" prefetch>
            <a>MarketPlace</a>
          </Link>
          {currentUser && (
            <>
              <Link href="/account" prefetch>
                <a>Account</a>
              </Link>
              <SignOut />
              <Mutation mutation={TOGGLE_CART_MUTATION}>
                {toggleCart => (
                  <button onClick={toggleCart}>
                    Cart 🛒
                    <CountCartItems
                      count={currentUser.cart.reduce(
                        (tally, cartItem) => tally + cartItem.quantity,
                        0,
                      )}
                    />
                  </button>
                )}
              </Mutation>
            </>
          )}
          {!currentUser && (
            <Link href="/welcome" prefetch>
              <a>SignIn</a>
            </Link>
          )}
        </NavStyles>
      )}
    </User>
  );
};

export default Nav;

/* Store Nav   ️ */
