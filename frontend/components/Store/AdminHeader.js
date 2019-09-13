import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledHeader, Logo } from "../Store/Header";
import AdminNav from "./AdminNav";

const AdminHeader = () => (
  //Listen to Router

  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Admin Panel</a>
        </Link>
      </Logo>
      <AdminNav />
    </div>
  </StyledHeader>
);

export default AdminHeader;
