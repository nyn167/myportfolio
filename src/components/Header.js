import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <Container>
        <Tags>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/blogs"
          >
            Blogs
          </NavLink>
        </Tags>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 10vh;
  overflow-x: hidden;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  justify-content: center;

  a {
    align-self: center;
    margin: 0 20px;
    font-size: 18px;
    color: #dddddd;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 12px;
      margin: 0 15px;
    }
  }
  a.link {
    text-decoration: none;
  }
  a.link-active {
    text-decoration: underline;
    color: white;
  }
`;
