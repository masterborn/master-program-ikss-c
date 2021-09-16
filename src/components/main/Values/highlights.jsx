import React from 'react';
import styled from 'styled-components';
import Tiles from './tiles';

const StyledValues = styled.div`
  text-align: center;
  margin-top: 157px;
`;

const StyledValuesParagraph = styled.p`
  width: 551px;
  height: 64px;
  margin: 40px auto;
`;

function Highlights({ content, assets, home }) {
  const headline = home 
  ? content.find((v) => v.fields.identifier === 'homepage-values') 
  : content.find((v) => v.fields.identifier === 'cooperation-tiles-title');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1?.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;

  return (
    <StyledValues>
      <h3>{headlineTitle}</h3>
      {home && <StyledValuesParagraph>{headlineDescription}</StyledValuesParagraph>}
      <Tiles home={home} content={content} assets={assets} />
    </StyledValues>
  );
}

export default Highlights;
