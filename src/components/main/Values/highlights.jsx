import React from 'react';
import styled from 'styled-components';
import Tiles from './tiles';

const StyledValues = styled.div`
  text-align: center;
`;

const StyledHeadline = styled.h3`
  margin: ${(props) => (props.displayOnHomePage ? '157px auto 32px' : '148px auto 64px')};
  @media (max-width: 1000px) {
    margin: ${(props) => (props.displayOnHomePage ? '157px auto 32px' : '80px auto 24px')};
    font-size: 24px;
    line-height: 32px;
  } ;
`;

const StyledValuesParagraph = styled.p`
  width: 551px;
  height: 64px;
  margin: 0 auto 40px;
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
      <StyledHeadline displayOnHomePage={displayOnHomePage}>{headlineTitle}</StyledHeadline>
      {displayOnHomePage && <StyledValuesParagraph>{headlineDescription}</StyledValuesParagraph>}
      <Tiles displayOnHomePage={displayOnHomePage} content={content} assets={assets} />
    </StyledValues>
  );
}

export default Highlights;
