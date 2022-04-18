import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <Container>
      <Img>
        <img src="/images/Project_img.svg" />
      </Img>
      <Heading>Check Out My Projects</Heading>
      <Project_container>
        <Project_Img>
          <img src="https://i.ytimg.com/vi/MbOLHi5tPAo/maxresdefault.jpg" />
        </Project_Img>
        <Project_Details>
          <Project_Heading>Meme Genrator</Project_Heading>
          <Project_Info>
            This is dummy project for testing this website. soon real projects
            will be displayed.
          </Project_Info>
          <Project_Live>Live</Project_Live>
          <Project_Code>Code</Project_Code>
        </Project_Details>
      </Project_container>
    </Container>
  );
}

export default Projects;

//the project component will gets from firebase and built components with new projects using props
//main container
const Container = styled.div`
  overflow-x: hidden;
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

const Heading = styled.div`
  font-family: "Kaushan Script", cursive;
  color: #feffff;
  letter-spacing: 3px;
  font-size: 35px;
  padding: 1rem 0 1rem;
`;

//project container
const Project_container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 80%;
  margin: 2rem auto;
  border: solid 1px;
  padding: 1rem;

  @media (max-width: 1031px) {
    flex-direction: column;
  }
`;

//project image that is to be uploaded
const Project_Img = styled.div`
  img {
    width: 600px;
    aspect-ratio: 2/1;

    @media (max-width: 900px) {
      width: 450px;
    }

    @media (max-width: 789px) {
      width: 300px;
    }
  }
`;

//projects detail section
const Project_Details = styled.div`
  padding: 1rem;
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 80%;
  margin: auto;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
const Project_Heading = styled.div`
  font-size: 30px;
  font-weight: 400;

  @media (max-width: 789px) {
    font-size: 25px;
  }
`;

const Project_Info = styled.div`
  font-size: 18px;
  @media (max-width: 789px) {
    font-size: 13px;
  }
`;

//project component button
const Project_Live = styled.button`
  border-radius: 5px;
  margin: 0 10px;
  margin-top: 3px;
  padding: 2px 10px;
  letter-spacing: 3px;
  font-weight: 500;
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
`;

const Project_Code = styled(Project_Live)``;
