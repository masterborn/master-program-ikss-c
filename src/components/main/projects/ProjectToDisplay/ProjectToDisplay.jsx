import React from 'react';
import styled from 'styled-components';
import YoutubeEmbed from '../Banner/YoutubeEmbed/youtubeEmbed';
import {FaPrimaryButton} from '../../../UI/Button/FaButton';

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
`;

const Container = styled.div`
  border-radius: 20px 20px 0 0 !important;
  overflow: hidden;
  display: inline-flex;
  width: 100%;
  height: 100%;
  padding-bottom: 45%;
`;

const ContentDiv = styled.div`
position: absolute;
          top: 550px;
          left: 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 20px 0 20px 0;
`;
const TitleDiv = styled.div`
display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: baseline;
            margin: 20px 0 20px 0;
`;
const DescriptionDiv = styled.div`

            margin: 20px 0 30px 0;
`;
const H5 = styled.h5`
margin-left: 30px;
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
        <TitleDiv>
          <h4>{title}</h4> <H5 >{date}</H5>
        </TitleDiv>
        <DescriptionDiv>{description}</DescriptionDiv>
        <FaPrimaryButton content={linkCaption} link={linkUrl}/>
      </ContentDiv>
    </Div>
  );
}

export default ProjectToDisplay;
