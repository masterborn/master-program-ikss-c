import React from 'react';
import { Container, Image, TextContent, StyledHeading } from '../aboutUsStyle';

function Mission({ content, assets }) {
  const headline = content.find((v) => v.fields.identifier === 'about-us-content-1');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;
  const missionImage = assets.find((v) => v.fields.title === 'Rectangle 20').fields.file.url;

  return (
    <Container margin="148px 0">
      <Image
        width={483}
        height={245}
        margin="0 56px 0 0"
        src={missionImage}
        alt="Zdjęcie członków stowarzyszenia IKSS"
      />
      <TextContent>
        <StyledHeading>{headlineTitle}</StyledHeading>
        <p>{headlineDescription}</p>
      </TextContent>
    </Container>
  );
}
export default Mission;
