import React from 'react';
import styled from 'styled-components';
import Tiles from './tiles';

const StyledValues = styled.div`
  text-align: center;
`;

const StyledHeadline = styled.h3`
  margin: 148px auto 64px;
  @media (max-width: 1000px) {
    margin: 80px auto 24px;
    font-size: 24px;
    line-height: 32px;
  };
`;

const StyledValuesParagraph = styled.p`
  width: 551px;
  height: 64px;
  margin: 0 auto 40px;
`;

function Highlights({ content, assets }) {
  const headline = content.find((v) => v.fields.identifier === 'cooperation-tiles-title');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1?.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;

  return (
    <StyledValues>
      <StyledHeadline>{headlineTitle}</StyledHeadline>
      {headlineDescription && <StyledValuesParagraph>{headlineDescription}</StyledValuesParagraph>}
      <Tiles content={content} assets={assets} />
    </StyledValues>
  );
}

export default Highlights;
