import React from "react";
import styled from "styled-components";

function About() {
  return (
    <div>
      <Container>
        <Img>
          <img src="./images/about_img.svg" />
        </Img>
        <Info>
          <Heading>About Me</Heading>
          <div className="para">
            Hii !
            <br />
            I am Nayan, a person who is searching for values and trading his
            resources to invest in them. <br />
            Currently I am a student pursing my B.Tech CSE at Parul University,
            Vadodara.
            <br />
            Well !!! You'll get to know me by looking at my projects about my
            interest towards Web Development.
            <br />
            Web Development is one of the technologies that is easy for me to
            understand and implement. I am competent in Html, CSS, Java-script,
            React JS, and as well as firebase with proficiency.
            <br />
            To add more, I have some little interest in Stock-Markets too. I
            like to research, invest, speculate in stocks. Taking interest in
            markets benefits me to know the trends and businesses. It also
            enlightens me about the ongoing and upcoming technologies which
            directly or indirectly helps me in building my career.
          </div>
        </Info>
      </Container>
    </div>
  );
}

export default About;

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  overflow-x: hidden;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
`;
const Img = styled.div`
  justify-self: center;
  align-self: center;
  padding: 2rem 0;

  img {
    width: 430px;
    @media (max-width: 950px) {
      width: 300px;
    }
  }
`;

const Info = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  background-color: #2b7a78;
  padding: 10px 25px;
  padding-bottom: 30px;

  div.para {
    text-align: left;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    line-height: 45px;
    color: black;
  }
`;
const Heading = styled.div`
  font-family: "Kaushan Script", cursive;
  color: #feffff;
  letter-spacing: 3px;
  font-size: 25px;
  padding: 1rem 0 2rem;

  //css for horizontal line
  &::after {
    content: "";
    display: block;
    border: 1px solid #feffff;
    margin: 0 2rem;
    margin-top: 1rem;
  }
`;
