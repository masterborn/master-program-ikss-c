import React from 'react';
import { Container, MissionImage, TextContent, StyledHeading , StyledParagraph} from '../aboutUsStyle';

function Mission({ content, assets }) {
  const headline = content.find((v) => v.fields.identifier === 'about-us-content-1');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;
  const missionImage = assets.find((v) => v.fields.title === 'Rectangle 20').fields.file.url;

  return (
    <Container>
      <MissionImage
        src={missionImage}
        alt="Zdjęcie członków stowarzyszenia IKSS"
      />
      <TextContent>
        <StyledHeading>{headlineTitle}</StyledHeading>
        <StyledParagraph>{headlineDescription}</StyledParagraph>
      </TextContent>
    </Container>
  );
}
export default Mission;
