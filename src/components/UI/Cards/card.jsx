import React from 'react';
import styled from 'styled-components';
import YoutubeEmbed from '../../main/projects/Banner/YoutubeEmbed/youtubeEmbed';
import { FaPrimaryButton } from '../Button/FaButton';

const CardStyled = styled.div`
  width: 100%;
  break-inside: avoid;
  transform: translateZ(0px);
  margin-bottom: 24px;
  text-align: justify;
  border-radius: 16px !important;
  background: #ffffff;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
`;

const Container = styled.div`
  border-radius: 16px 
  padding: 0;
`;

const StyledParagraph = styled.p`
  max-width: 100%;
  overflow-wrap: break-word;
  height: auto;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    width: 375px;
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;
const Content = styled.div`
  padding: 32px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 355px;
  border-radius: 16px 16px 0 0;
`;
function extractEmbededVideoUrl(url) {
  const youtubeId = url?.split('=').pop();
  return `https://www.youtube.com/embed/${youtubeId}`;
}

function Card(props) {
  const { children } = props;
  const embededVideoUrl = extractEmbededVideoUrl(children.videoUrl);
  const renderVideoOrImage = children.videoUrl ? (
    <YoutubeEmbed
      url={embededVideoUrl}
      sizeHeight={355}
      padding="0"
      ratio="2/1"
      borderRadius="16px 16px 0 0 "
    />
  ) : (
    <StyledImg src={children.imageUrl} alt="project" />
  );
  return (
    <CardStyled>
      <Container>{renderVideoOrImage}</Container>
      <Content>
        <Headline>
          <h4>{children.title}</h4>
          <h5 style={{ marginLeft: '20px', color: '#61798B' }}>{children.date}</h5>
        </Headline>
        <StyledParagraph>{children.description}</StyledParagraph>
        <FaPrimaryButton content={children.linkCaption} link={children.linkUrl} />
      </Content>
    </CardStyled>
  );
}

export default Card;
