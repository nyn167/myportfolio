import React, { forwardRef, useRef } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function LandingPage() {
  return (
    <Container>
      <Intro>
        <div className="main_name">Nayankumar Mal</div>
        <div className="profile">I'm a Web Developer</div>
        <Link  to="contact" spy={true} smooth={true}><button>Contact</button></Link>
      </Intro>
      <Img>
        <img src="./images/Profile.svg" />
      </Img>
    </Container>
  );
}

export default LandingPage;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

//styling the name, profile and contact button on hoome page
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;

  div.main_name {
    font-size: 60px;
    letter-spacing: 2px;
    font-family: "Kaushan Script", cursive;
    color: #feffff;
    @media (max-width: 950px) {
      font-size: 35px;
    }

    @media (max-width: 789px) {
      font-size: 29px;
    }
  }

  div.profile {
    text-align: left;
    font-size: 25px;
    margin: 10px 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    color: #17252a;

    @media (max-width: 950px) {
      font-size: 17px;
    }

    @media (max-width: 789px) {
      font-size: 15px;
    }
  }

  button {
    width: fit-content;
    border: none;
    border-radius: 12px;
    margin-top: 3px;
    padding: 10px 15px;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 18px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #171717;
    background-color: #feffff;
    cursor: pointer;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 950px) {
      font-size: 18px;
    }

    @media (max-width: 789px) {
      font-size: 10px;
    }
  }
`;

// styling the svg image
const Img = styled.div`
  img {
    width: 70%;
    /* flex-basis: 50%; */

    @media (max-width: 950px) {
      width: 70%;
    }
  }
`;
