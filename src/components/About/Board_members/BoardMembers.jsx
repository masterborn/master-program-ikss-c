import React from 'react';
import styled from 'styled-components';
import MemberCard from './MemberCard';

const Description = styled.p`
  max-width: 635px;
  margin: 32px auto 64px;
  text-align: center;
`;
const CardDisplay = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  margin: 0 auto;
  grid-template-columns: 384px 384px 384px;
  gap: 24px;
  margin-bottom: 100px;
  @media (max-width: 1250px) {
    grid-template-columns: 384px 384px;
  }
  @media (max-width: 830px) {
    grid-template-columns: 384px;
  }
`;

function BoardMembers({ content, board, assets }) {
  const boardSectiondata = content.find(
    (entry) => entry.fields.identifier === 'about-us-board-members-text',
  );
  const headline = boardSectiondata.fields.title;
  const description = boardSectiondata.fields.text1.content[0].content[0].value;

  board.sort((a, b) => (a.fields.order < b.fields.order ? 1 : -1));

  return (
    <div>
      <h3>{headline}</h3>
      <Description>{description}</Description>
      <CardDisplay>
        {board.map((member) => (
          <MemberCard key={member.sys.id} member={member} assets={assets} />
        ))}
      </CardDisplay>
    </div>
  );
}

export default BoardMembers;
