import React from 'react';
import styled from 'styled-components';
import extractImageUrl from '@root/utils';
import { PrimaryButton } from '../Button/Button';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: ${(props) => (props.linkCaption ? '148px 0' : '64px 0 0')};
  @media (max-width: 860px) {
    margin: ${(props) => (props.linkCaption ? '100px 0 130px' : '32px 0 0')};
  }
`;
const StyledParegraph = styled.p`
  max-width: ${(props) => props.paragraphWidth};
  margin: auto 24.5px;
  @media (max-width: 860px) {
    font-size: ${(props) => (props.linkCaption ? '16px' : '14px')};
    line-height: ${(props) => (props.linkCaption ? '32px' : '28px')};
  }
`;

const StyledTopTitle = styled.h1`
  margin: 16px auto 32px;
  @media (max-width: 860px) {
    font-size: 32px;
    line-height: 44px;
    margin: 8px auto 24px;
  }
`;

const StyledBottomTitle = styled.h3`
  margin: 0 auto 32px;
  @media (max-width: 860px) {
    font-size: 24px;
    line-height: 32px;
    margin: 0px 24.5px 16px;
  }
`;

const StyledTopLogo = styled.img`
  width: 230px;
  height: 142px;
  @media (max-width: 860px) {
    width: 181px;
    height: 112px;
  }
`;
const SectionButton = styled(PrimaryButton)`
  margin-top: 32px;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  @media (max-width: 860px) {
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;

function Section({ content, assets, shortTopParagraph }) {
  const data = content.find((x) => x.fields);
  const { title, text1, image1, linkCaption } = data.fields;
  const description = text1?.content.map((x) => x.content.find((y) => y.value).value).toString();
  const imageUrl = extractImageUrl(image1, assets);
  const shortTopSection = shortTopParagraph ? '583px' : '995px';
  const paragraphWidth = linkCaption ? '635px' : `${shortTopSection}`;
  return (
    <StyledDiv linkCaption={linkCaption}>
      {imageUrl && <StyledTopLogo src={imageUrl} alt={`Logo ${title}`} />}
      {linkCaption ? (
        <StyledBottomTitle>{title}</StyledBottomTitle>
      ) : (
        <StyledTopTitle>{title}</StyledTopTitle>
      )}
      <StyledParegraph linkCaption={linkCaption} paragraphWidth={paragraphWidth} >
        {description}
      </StyledParegraph>
      {linkCaption && <SectionButton>{linkCaption}</SectionButton>}
    </StyledDiv>
  );
}

export default Section;
