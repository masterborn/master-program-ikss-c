import React from 'react';
import { Container, ContentContainer, StyledHeading, StyledParagraph, ImageContainer, Image } from '../aboutUsStyle';



function History({ content, assets }) {
    const headline = content.find((v) => v.fields.identifier === 'about-us-content-2');
    const headlineTitle = headline.fields.title;
    const headlineDescription1Part = headline.fields.text1.content[0].content[0].value;
    const headlineDescription2Part = headline.fields.text2.content[0].content[0].value;
    const headlineDescription3Part = headline.fields.text2.content[1].content[0].value;
    const historyImage1 = assets.find((v) => v.fields.title === 'Rectangle 21').fields.file.url;
    const historyImage2 = assets.find((v) => v.fields.title === 'Rectangle 22').fields.file.url;

    return (
      <Container>
        <ContentContainer>
          <StyledHeading>{headlineTitle}</StyledHeading>
          <StyledParagraph>{headlineDescription1Part}</StyledParagraph>
          <StyledParagraph>{headlineDescription2Part}</StyledParagraph>
          <StyledParagraph>{headlineDescription3Part}</StyledParagraph>
        </ContentContainer>
        <ImageContainer>
          <Image width={483} height={352} margin="0 0 32px 56px" src={historyImage1} alt="Zdjęcie członków stowarzyszenia IKSS" />
          <Image width={483} height={265} margin="0 0 0 56px" src={historyImage2} alt="Zdjęcie członków stowarzyszenia IKSS" />
        </ImageContainer>
      </Container>
    );
}
export default History;
