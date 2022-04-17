import React from "react";
import styled from "styled-components";

function PBC({ heading, info, button, getPosition }) {
  // console.log(getProjects);
  return (
    <Container>
      <div className="heading">{heading}</div>
      <div className="info">
        <p>{info}</p>
        <button onClick={() => getPosition()}>{button}</button>
      </div>
    </Container>
  );
}

export default PBC;

const Container = styled.div`
  margin: 1rem 0;

  div.heading {
    font-family: "Kaushan Script", cursive;
    color: #feffff;
    letter-spacing: 3px;
    font-size: 25px;
    padding: 2rem 0;
  }

  div.info {
    width: 80%;
    padding: 30px;
    margin: auto;
    background-color: #2b7a78;
    color: #feffff;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 5px;
  }

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
`;
