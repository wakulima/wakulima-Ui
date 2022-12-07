import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

function NavBar() {
    
  return (
    <Nav>
      <div className="title">
        <h4>Hi Kim,</h4>
        <h1>
          Welcome to <span>MY Wara dashboard</span>
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
      color: black;
      span {
        margin-left: 0.5rem;
        color: #4DB852;
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
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &::placeholder {
        color: #ffc107;
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
