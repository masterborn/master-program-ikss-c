import React from 'react';
import styled from 'styled-components';
import YoutubeEmbed from '../Banner/YoutubeEmbed/youtubeEmbed';
import { FaPrimaryButton } from '../../../UI/Button/FaButton';

const Div = styled.div`
  position: relative;
  width: 950px;
  height: 950px;
  display: block;
  border-radius: 25px 25px 0px 0px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  margin-bottom: 56px;
  @media (max-width: 860px) {
    width: 550px;
    height: 550px;
  }
`;

const Container = styled.div`
  border-radius: 20px 20px 0 0 !important;
  overflow: hidden;
  display: inline-flex;
  width: 100%;
  height: 100%;
  padding-bottom: 45%;
  @media (max-width: 860px) {
    padding-bottom: 0;
  }
`;

const ContentDiv = styled.div`
  position: absolute;
  top: 550px;
  left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0 20px 0;
  @media (max-width: 860px) {
    background-color: white;
    margin: -15px 0;
    left: 0px;
    border-radius: 0 0 20px 20px;
  }
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin: 20px 0 20px 0;
  @media (max-width: 860px) {
    width: 95%;
  }
`;
const DescriptionDiv = styled.div`
  margin: 20px 0 30px 0;
  text-align: left;
`;
const H5 = styled.h5`
  margin-left: 30px;
`;

const Wrapper = styled.div`
  @media (max-width: 860px) {
    margin: 20px auto;
  }
`;
const Wrapper2 = styled.div`
  @media (max-width: 860px) {
    width: 90%;
    margin: 0 auto;
  }
`;

function extractEmbededId(project) {
  const { imageUrl } = project;
  if (project.isVideo) {
    const youtubeId = imageUrl.split('=').pop();
    return youtubeId;
  }
  return imageUrl;
}

function ProjectToDisplay({ project }) {
  const { imageUrl, fields } = project;
  const { title, linkCaption, linkUrl, date } = fields;
  const description = fields.description.content
    .map((x) => x.content.find((y) => y.value).value)
    .toString();
  const youtubeId = extractEmbededId(project);
  const combineUrlForIframe = `https://www.youtube.com/embed/${youtubeId}`;
  const renderVideoOrImage = project.isVideo ? (
    <YoutubeEmbed url={combineUrlForIframe} />
  ) : (
    <img src={imageUrl} alt="main" />
  );
  return (
    <Div>
      <Container>{renderVideoOrImage}</Container>
      <ContentDiv>
        <Wrapper2>
          <TitleDiv>
            <h4>{title}</h4> <H5>{date}</H5>
          </TitleDiv>
          <DescriptionDiv>{description}</DescriptionDiv>
        </Wrapper2>
        <Wrapper>
          <FaPrimaryButton content={linkCaption} link={linkUrl} />
        </Wrapper>
      </ContentDiv>
    </Div>
  );
}

export default ProjectToDisplay;
