import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 148px 0;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    max-width: 600px;
    margin: 148px auto;
  }
  @media (max-width: 860px) {
    margin: 80px auto;
  }
`;

export const MobileHistoryContainer = styled(Container)`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    margin: 148px auto;
  }
  width: 375px;
`;
export const DesktopHistoryContainer = styled(Container)`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TeamContainer = styled.div`
  max-width: 1440px;
  text-align: center;
  margin: 164px auto 0;
  @media (max-width: 1000px) {
    margin: 80px auto 0;
  }
`;

export const TeamStyledHeading = styled.h3`
  margin: 0 auto 32px;
  @media (max-width: 1000px) {
    font-size: 24px;
    line-height: 32px;
    margin: 0 auto 16px;
  }
`;

export const TeamStyledParagraph = styled.p`
  width: 635px;
  margin: 0 auto 64px;
  @media (max-width: 1000px) {
    width: 327px;
    margin: 0 auto 32px;
  }
`;

export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  filter: drop-shadow(3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07))
    drop-shadow(1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725))
    drop-shadow(0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035))
    drop-shadow(0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275));
  border-radius: 16px;
  margin: ${(props) => props.margin};
`;

export const MissionImage = styled(Image)`
  width: 483px;
  height: 245px;
  margin: 0 56px 0 24px;
  @media (max-width: 1000px) {
    width: 327px;
    height: 201px;
    margin: 0px auto 32px;
  }
`;

export const TeamImage = styled(Image)`
  width: 996px;
  height: 505px;
  margin: auto;
  @media (max-width: 1000px) {
    width: 327px;
    height: 169px;
    margin: auto;
  }
`;

export const HistoryImage = styled(Image)`
  @media (max-width: 1000px) {
    margin: 16px auto 32px;
  }
`;

export const TextContent = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 327px;
    margin: 0px;
  }
`;

export const StyledHeading = styled.h2`
  padding-bottom: 24px;
  @media (max-width: 1000px) {
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ContentContainer = styled.div`
  width: 46%;
  display: flex;
  margin-left: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  padding-bottom: 24px;
  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 28px;
    width: 327px;
  }
`;
