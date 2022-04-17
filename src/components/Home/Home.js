import React from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import PBC from "./PBC";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";

function Home() {
  const getProjects = () => {
    navigate("/projects");
  };

  const getBlogs = () => {
    navigate("/blogs");
  };

  const navigate = useNavigate();
  return (
    <Container>
      <LandingPage />
      <AboutMe />
      <Skills />
      <PBC
        heading={"Projects"}
        info={
          "I like to build projects as per my understanding and also believe in showcasing it on the Internet.."
        }
        button={"CheckOut my Projects"}
        getPosition={getProjects}
      />
      <PBC
        heading={"Blogs"}
        info={
          "Well..! I'm a person searching for values and trade my resources to invest in them and so my blogs are the proof to those experinces.."
        }
        button={"CheckOut my Blogs"}
        getPosition={getBlogs}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
