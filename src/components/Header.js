import React from "react";

import {Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
      <HeaderContainer>
          <Link to="/">
      <button>
        Live
      </button>
          </Link>
          <Link to="/home">
      <button >
        Home
      </button></Link>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
margin: 10px 20px;
`
const LinkContainer = styled.button`
  margin: 10px 20px;
`;