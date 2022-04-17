import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function AboutMe() {
  return (
    <Container>
      <div className="heading">About Me</div>
      <Detail>
        <img src="./images/profile_img.jpg" />
        <p className="info">
          Hey all! 👋
          <br />
          Nayan here,
          <br />
          I'm a final year undergrad student. My field of interest includes Web
          Development, specifically, Front-end. I am proficient in HTML, CSS,
          Bootstrap and currently exploring JavaScript and React.
          <br />
          <Link to="/about">
            <button>Know More</button>
          </Link>
        </p>
      </Detail>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  background-color: #2b7a78;
  padding: 2rem;

  div.heading {
    font-family: "Kaushan Script", cursive;
    color: #feffff;
    letter-spacing: 3px;
    font-size: 25px;
    padding: 1rem 0 2rem;
  }

  //css for horizontal line
  div.heading::after {
    content: "";
    display: block;
    border: 1px solid #feffff;
    margin: 0 2rem;
    margin-top: 1rem;
  }
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  img {
    width: 250px;
    border-radius: 50%;
    justify-self: center;
    align-self: center;
  }

  p.info {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #feffff;
    text-align: left;
    align-self: center;
    font-size: 18px;

    button {
      margin-top: 10px;
      padding: 10px 10px;
      letter-spacing: 1px;
      font-size: 85%;
      color: #2b7a78;
      font-weight: 700;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: cubic-bezier(0.19, 1, 0.22, 1) s;

      &:hover {
        color: #feffff;
        background-color: #17252a;
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    p.info {
      text-align: justify;
    }
  }
`;
