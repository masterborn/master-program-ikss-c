import React from 'react';
import { TeamContainer, Image, TeamStyledParagraph, StyledHeading } from '../aboutUsStyle';

function Team({ content, assets }) {
  const headline = content.find((v) => v.fields.identifier === 'about-us-content-3');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;
  const TeamImage = assets.find((v) => v.fields.title === 'Rectangle 20 (1)').fields.file.url;

  return (
    <TeamContainer margin="148px auto">
        <StyledHeading>{headlineTitle}</StyledHeading>
        <TeamStyledParagraph>{headlineDescription}</TeamStyledParagraph>
      <Image width={996} height={505} margin="auto" src={TeamImage} alt="bla" />
    </TeamContainer>
  );
}
export default Team;
