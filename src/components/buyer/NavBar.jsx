import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

function NavBar() {
    
  return (
    <Nav>
      <div className="title">
        <h4 style={{color: "#4DB852"}}>Hello,</h4>
        <h1>
          Welcome to <span> Wara Farm Marketplace</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
color: white;

.title {
  font-size: 16px;
  h4{
    color: black;
    font-weight: bold;
  }
  h1 {
    color: #4DB852;
    span {
      margin-left: 0.5rem;
      color: white;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      font-family: "Permanent Marker", cursive;
    }
  }
}

.search {
  background-color: #212121;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 8rem 1rem 1rem;
  border-radius: 1rem;
  svg {
    color: #4DB852;
  }
  input {
    background-color: transparent;
    border: none;
    color: white;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
    &::placeholder {
      color: white;
    }
    &:focus {
      outline: none;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
        h1 {
            span {
                display: block;
                margin: 1rem 0;
            }
        }
    }
}
`;

export default NavBar;
