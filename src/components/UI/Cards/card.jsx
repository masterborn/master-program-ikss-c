import React from 'react';
import styled from 'styled-components';
import YoutubeEmbed from '../../main/projects/Banner/YoutubeEmbed/youtubeEmbed';
import { FaPrimaryButton, Button } from '../Button/FaButton';
import fallback from '../../../assets/fallback/fallback.png';

const CardStyled = styled.div`
  width: 100%;
  break-inside: avoid;
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

const StyledHeading = styled.h5`
  margin-left: 20px;
  color: ${({ theme }) => theme.color.card};
`;

const Div = styled.div`
  padding-bottom: 24px;
`;

function extractEmbededVideoUrl(url) {
  const youtubeId = url?.split('=').pop();
  return `https://www.youtube.com/embed/${youtubeId}`;
}

// intentionally leave this component in this file as it is use only i this place
function EventButton({ caption, linkUrl }) {
  const checkIsCaptionExist = caption !== undefined;
  const useFacebookOrNormalBtn = linkUrl?.includes('facebook') ? (
    <FaPrimaryButton content={caption} link={linkUrl} />
  ) : (
    <Button content={caption} link={linkUrl} />
  );
  const renderButton = checkIsCaptionExist && useFacebookOrNormalBtn;
  return <>{renderButton}</>;
}

function Card({ children }) {
  const { videoUrl, imageUrl, description, linkCaption, linkUrl, title, date } = children;
  const embededVideoUrl = extractEmbededVideoUrl(videoUrl);
  const renderVideoOrImage = videoUrl ? (
    <YoutubeEmbed
      url={embededVideoUrl}
      sizeHeight={355}
      paddingBottom="0"
      ratio="2/1"
      borderRadius="16px 16px 0 0 "
    />
  ) : (
    <StyledImg src={imageUrl || fallback.src} alt="project" />
  );
  return (
    <Div>
      <CardStyled>
        <Container>{renderVideoOrImage}</Container>
        <Content>
          <Headline>
            <h4>{title}</h4>
            <StyledHeading>{date}</StyledHeading>
          </Headline>
          <StyledParagraph>{description}</StyledParagraph>
          <EventButton caption={linkCaption} linkUrl={linkUrl} />
        </Content>
      </CardStyled>
    </Div>
  );
}

export default Card;
