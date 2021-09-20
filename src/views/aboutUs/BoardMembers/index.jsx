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
  justify-items: center;
  align-items: start;
  grid-template-columns: 384px 384px;
  gap: 0px 24px;
  margin-bottom: 100px;
  @media (max-width: 830px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 400px) {
    max-width: 90vw;
  }
`;
const CardDisplayColumns = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  @media (max-width: 400px) {
    max-width: 90vw;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${({ side }) => (side ? '264px' : '0px')};
`;

const BoardMembersSection = styled.section`
  margin-top: 148px;
`;

function BoardMembers({ content, board, assets }) {
  const boardSectiondata = content.find(
    (entry) => entry.fields.identifier === 'about-us-board-members-text',
  );
  const headline = boardSectiondata.fields.title;
  const description = boardSectiondata.fields.text1.content[0].content[0].value;

  board.sort((a, b) => (a.fields.order < b.fields.order ? 1 : -1));

  const firstColumnMembers = [board[1], board[4]];
  const secondColumnMembers = [board[0], board[3], board[6]];
  const thirdColumnMembers = [board[2], board[5]];

  return (
    <BoardMembersSection>
      <h3>{headline}</h3>
      <Description>{description}</Description>
      <CardDisplayColumns>
        <Column side>
          {firstColumnMembers.map((member) => (
            <MemberCard key={member.sys.id} member={member} assets={assets} />
          ))}
        </Column>
        <Column>
          {secondColumnMembers.map((member) => (
            <MemberCard key={member.sys.id} member={member} assets={assets} />
          ))}
        </Column>
        <Column side>
          {thirdColumnMembers.map((member) => (
            <MemberCard key={member.sys.id} member={member} assets={assets} />
          ))}
        </Column>
      </CardDisplayColumns>
      <CardDisplay>
        {board.map((member) => (
          <MemberCard key={member.sys.id} member={member} assets={assets} />
        ))}
      </CardDisplay>
    </BoardMembersSection>
  );
}

export default BoardMembers;
