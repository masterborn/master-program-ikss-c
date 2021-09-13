import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1440px;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 150px;
`;

const Image = styled.img`
  width: 483px;
  height: 245px;
  filter: drop-shadow(3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07))
    drop-shadow(1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725))
    drop-shadow(0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035))
    drop-shadow(0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275));
  border-radius: 16px;
  margin-right: 56px;
`;

const TextContent = styled.div`
  width: 658px;
  height: 128px;
  & h2{
    padding-bottom: 24px;
  }
`;

function Mission({content, assets}) {
    const headline = content.find((v) => v.fields.identifier === 'about-us-content-1');
    const headlineTitle = headline.fields.title;
    const headlineDescription = headline.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
        .content.find((v) => v.nodeType === 'text').value;
    const missionImage = assets.find((v) => v.fields.title === 'Rectangle 20').fields.file.url;

    return (
      <Container>
        <Image src={missionImage} alt="bla" />
        <TextContent>
            <h2>{headlineTitle}</h2>
            <p>{headlineDescription}</p>
        </TextContent>
      </Container>
    );
}
export default Mission;