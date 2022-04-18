import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container id="contact">
      <div className="heading">Connect With Me</div>
      <Tags>
        <a href="mailto: iamnayan160701@gmail.com" title="Email">
          <img src="./images/mail.png" />
        </a>
        <a href="https://github.com/nyn167" target="_blank" title="Email">
          <img src="./images/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/nayan-mal167/" target="_blank" title="Email">
          <img src="./images/linkedin.png" />
        </a>
        <a href="https://twitter.com/nayan_167" target="_blank" title="Email">
          <img src="./images/twitter.png" />
        </a>
      </Tags>
      <p>Designed and Managed By Nayan</p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #2b7a78;
  height: 40vh;
  padding: 2rem;
  display: grid;
  grid-template-rows: 20% 60% 20%;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  div.heading {
    font-size: 25px;
    color: #feffff;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    letter-spacing: 1px;
  }

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #feffff;
    letter-spacing: 2px;
    word-spacing: 1px;
  }

  @media (max-width: 800px) {
   p{
     font-size: 15px;
   } 
  }
`;

const Tags = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  justify-content: center;

  a {
    padding: 0 25px;
  }
  @media (max-width: 800px) {
    width: 80%;
    margin: auto;
  }
`;
