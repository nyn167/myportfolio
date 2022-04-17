import React from 'react'
import styled from 'styled-components'

function Blogs() {
  return (
    <Container>
        <div className='heading'>Blogs</div>
    </Container>
  )
}

export default Blogs

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