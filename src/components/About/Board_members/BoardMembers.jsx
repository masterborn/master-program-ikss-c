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
  justify-content: center;
  place-items: center;
  /* max-width: 1200px; */
  margin: 0 auto;
  grid-template-columns: 384px 384px 384px;
  column-gap: 24px;
  row-gap: 24px;
  margin-bottom: 100px;
  @media (max-width: 1250px) {
    grid-template-columns: 384px 384px;
  }
`;

function BoardMembers({ content, board, assets }) {
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
          <MemberCard member={member} assets={assets} />
        ))}
      </CardDisplay>
    </div>
  );
}

export default BoardMembers;
