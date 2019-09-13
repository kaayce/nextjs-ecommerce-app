/* Store Nav   ️ */

import React from "react";
import { Mutation } from "react-apollo";

// file imports
import Link from "next/link";
import NavStyles from "../styles/NavStyles";
import User from "../Accounts/User";
import SignOut from "../SignUp/SignOut";
const Nav = props => {
  return (
    <User>
      {({ data: { currentUser } }) => (
        <NavStyles>
          <Link href="/" prefetch>
            <a>Home</a>
          </Link>
          <Link href="/store" prefetch>
            <a>MarketPlace</a>
          </Link>
          {currentUser && (
            <>
              <Link href="/admin" prefetch>
                <a>Add</a>
              </Link>
              <Link href="/admin-edit-delete" prefetch>
                <a>Edit/Delete</a>
              </Link>
              <Link href="/set-permissions" prefetch>
                <a>Permissions</a>
              </Link>
              <SignOut />
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
