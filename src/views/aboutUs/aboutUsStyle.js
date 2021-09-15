import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${(props) => props.margin};
`;

export const TeamContainer = styled.div`
  max-width: 1440px;
  text-align: center;
  ${'' /* margin-bottom: 148px; */}
  margin: ${(props) => props.margin};
`;


export const TeamStyledHeading = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 32px;
`;

export const TeamStyledParagraph = styled.p`
  width: 635px;
  margin: 0 auto 64px;
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

export const TextContent = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
`;

export const StyledHeading = styled.h2`
  padding-bottom: 24px;
`;

export const ContentContainer = styled.div`
  width: 46%;
  display: flex;
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
`;
