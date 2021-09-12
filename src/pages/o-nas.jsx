import MemberCard from '@root/components/About/Board_members/MemberCard';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function About() {
  return (
    <main>
      <Wrapper>
        <h1>Hello About US</h1>
        <MemberCard />
      </Wrapper>
    </main>
  );
}

export default About;
