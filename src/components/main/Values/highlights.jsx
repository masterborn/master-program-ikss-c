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

function Highlights({ content, assets, displayOnHomePage }) {
  const headline = displayOnHomePage
    ? content.find((v) => v.fields.identifier === 'homepage-values')
    : content.find((v) => v.fields.identifier === 'cooperation-tiles-title');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1?.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;

  return (
    <StyledValues>
      <h3>{headlineTitle}</h3>
      {displayOnHomePage && <StyledValuesParagraph>{headlineDescription}</StyledValuesParagraph>}
      <Tiles displayOnHomePage={displayOnHomePage} content={content} assets={assets} />
    </StyledValues>
  );
}

export default Highlights;
