import React from 'react';
import styled from 'styled-components';
import MemberCard from './MemberCard';

function BoardMembers({ content }) {
  const boardSectiondata = content.find(
    (entry) => entry.fields.identifier === 'about-us-board-members-text',
  );
  const headline = boardSectiondata.fields.title;
  const description = boardSectiondata.fields.text1.content[0].content[0].value;

  const Describtion = styled.p`
    max-width: 635px;
    margin: 32px auto 64px;
    text-align: center;
  `;

  return (
    <div>
      <h3>{headline}</h3>
      <Describtion>{description}</Describtion>
      <MemberCard />
    </div>
  );
}

export default BoardMembers;
