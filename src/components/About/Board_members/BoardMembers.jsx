import React from 'react';
import styled from 'styled-components';
import MemberCard from './MemberCard';

const Describtion = styled.p`
  max-width: 635px;
  margin: 32px auto 64px;
  text-align: center;
`;
const CardDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function BoardMembers({ content, board }) {
  const boardSectiondata = content.find(
    (entry) => entry.fields.identifier === 'about-us-board-members-text',
  );
  const headline = boardSectiondata.fields.title;
  const description = boardSectiondata.fields.text1.content[0].content[0].value;

  return (
    <div>
      <h3>{headline}</h3>
      <Describtion>{description}</Describtion>
      <CardDisplay>
        {board.map((member) => (
          <MemberCard member={member} />
        ))}
      </CardDisplay>
    </div>
  );
}

export default BoardMembers;
