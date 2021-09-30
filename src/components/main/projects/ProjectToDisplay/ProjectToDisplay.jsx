import React from 'react';
import styled from 'styled-components';
import { useMedia } from 'react-use';
import YoutubeEmbed from '../Banner/YoutubeEmbed/youtubeEmbed';
import { FaPrimaryButton } from '../../../UI/Button/FaButton';

const Div = styled.div`
  position: relative;
  width: ${(props) => (props.setWidth || '950px')};
  height: ${(props) => (props.setHeight || '950px')};
  display: block;
  border-radius: 25px 25px 0px 0px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  margin-bottom: 56px;  
  @media(max-width: 860px){
    width: 327px;
    height: 650px;
  }
`;

const Container = styled.div`
  border-radius: 20px 20px 0 0 !important;
  overflow: hidden;
  display: inline-flex;
  width: 100%;
  height: 100%;
  @media(max-width: 860px){
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
  @media(max-width: 860px){
    max-width: 375px;
    max-height: 375px;
     top: 220px;
     left: 15px;
  }
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin: 20px 0 20px 0;
  @media(max-width: 860px){
    margin: 0;
    font-size:12px;
  }
`;
const DescriptionDiv = styled.div`
  margin: 20px 0 30px 0;
  text-align: left;
`;
const H5 = styled.h5`
  margin-left: 30px;
`;
const YtDiv = styled.div`
  max-width: 57%;
  @media (max-width: 1150px) {
    max-width: 100%;
  }
`;
const ButtonDiv = styled.div`
  @media (max-width: 1150px) {
    margin 0 auto;
  }
`;

function YoutubeEmbed2({ url }){
  return (
    <div>
    <iframe
      style={{
        maxWidth: '327px',
        with: '100%',
        height: '185px',
        aspectRatio: '16/9',
        borderRadius: "10px 10px 0 0 ",
      }}
      src={`${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      controls
    />
    </div>
  )
}

function extractEmbededId(project) {
  const { imageUrl } = project;
  if (project.isVideo) {
    const youtubeId = imageUrl.split('=').pop();
    return youtubeId;
  }
  return imageUrl;
}

function ProjectToDisplay({ project }) {
  const isMobile = useMedia('(max-width: 860px)');
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
      {isMobile? <YoutubeEmbed2 url={combineUrlForIframe}/> : <Container>{renderVideoOrImage}</Container>}
      <ContentDiv>
        <TitleDiv>
          <h4 style={{fontSize: '18px', margin: '0'}}>{title}</h4> <H5 style={{fontSize: '16px'}}>{date}</H5>
        </TitleDiv>
        <DescriptionDiv>{description}</DescriptionDiv>
        <ButtonDiv>
        <FaPrimaryButton content={linkCaption} link={linkUrl} />
        </ButtonDiv>
        
      </ContentDiv>
      

    </Div>
  );
}

export default ProjectToDisplay;
