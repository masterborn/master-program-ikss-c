import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 1440px;
  text-align: left;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 150px;
`;

const FirstImage = styled.img`
  width: 483px;
  height: 352px;

  filter: drop-shadow(3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07))
    drop-shadow(1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725))
    drop-shadow(0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035))
    drop-shadow(0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275));
  border-radius: 16px;
  margin-left: 56px;
`;

const SecondImage = styled(FirstImage)`
  height: 265px;
  margin-top: 32px;
`;

const TextContent = styled.div`
  width: 658px;
  height: 128px;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap:nowrap;
  justify-content: center;
  & h2 {
    padding-bottom: 24px;

  };

`;

function Histry({ content, assets }) {
    const headline = content.find((v) => v.fields.identifier === 'about-us-content-2');
    const headlineTitle = headline.fields.title;
    const headlineDescription1Part = headline.fields.text1.content[0].content[0].value;
    const headlineDescription2Part = headline.fields.text2.content[0].content[0].value;
    const headlineDescription3Part = headline.fields.text2.content[1].content[0].value;
    const histryImage1 = assets.find((v) => v.fields.title === 'Rectangle 21').fields.file.url;
    const histryImage2 = assets.find((v) => v.fields.title === 'Rectangle 22').fields.file.url;

    return (
      <Container>
          <FirstImage src={histryImage1} alt="Members of the IKSS association" />
          <TextContent>
            <h2>{headlineTitle}</h2>
            <p>{headlineDescription1Part}</p>
          </TextContent>
          <SecondImage src={histryImage2} alt="Members of the IKSS association" />
          <TextContent>
            <p>{headlineDescription2Part}</p>
            <p>{headlineDescription3Part}</p>
          </TextContent>
      </Container>
    );
}
export default Histry;
