import React from "react";
import styled from "styled-components";

function Skills() {
  return (
    <Container>
      <div className="heading">Skills</div>
      <SkillIcon>
        <Icon>
          <i class="devicon-html5-plain colored" />
          <span>Html 5</span>
        </Icon>
        <Icon>
          <i class="devicon-css3-plain colored" />
          <span>CSS 3</span>
        </Icon>
        <Icon>
          <i class="devicon-javascript-plain colored" />
          <span>Javascript</span>
        </Icon>
        <Icon>
          <i class="devicon-firebase-plain colored" />
          <span>Firebase</span>
        </Icon>
        <Icon>
          <i class="devicon-github-original colored" />
          <span>GitHub</span>
        </Icon>
        <Icon>
          <i class="devicon-react-plain colored" />
          <span>React</span>
        </Icon>
        <Icon>
          <i class="devicon-vscode-plain colored" />
          <span>Vs-code</span>
        </Icon>
      </SkillIcon>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  margin: 1rem 0;

  div.heading {
    font-family: "Kaushan Script", cursive;
    color: #feffff;
    letter-spacing: 3px;
    font-size: 25px;
    padding: 2rem 0;
  }
`;

const SkillIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-basis: 15em;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;

  i {
    justify-self: center;
    align-self: center;
    font-size: 6rem;
    padding: 1rem;
  }

  span {
    justify-self: center;
    align-self: center;
    font-size: 30px;
  }
`;
