import React from 'react';
import styled from 'styled-components';

const StyledPartners = styled.div`
  text-align: center;
  max-width: 1188px;
  max-height: 796px;
  margin: ${(props) => (props.logosDisplayedOnHomepage ? '148px auto 0' : '156px auto 0')};
  & h3 {
    margin: 0 auto 32px;
    @media (max-width: 1000px) {
      margin: 0 auto 16px;
      font-size: 24px;
      line-height: 32px;
    }
  }
  & p {
    margin: 0 auto 64px;
    width: 635px;
    height: 64px;
    @media (max-width: 1000px) {
      width: 327px;
      height: 112px;
      margin: 0 auto 32px;
      font-size: 14px;
      line-height: 28px;
    }
  }
  @media (max-width: 1000px) {
    margin: ${(props) => (props.logosDisplayedOnHomepage ? '80px auto 0' : '100px auto 0')};
  };
`;

const StyledPartner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 48px 72px;
  @media (max-width: 1000px) {
    gap: 24px;
  }
`;

const StyledPartnerLogo = styled.div`
  display: flex;
  width: 180px;
  height: 80px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 90px;
    height: 40px;
  };
`;
const StyledPartnerImg = styled.img`
  @media (max-width: 1000px) {
    width: 90px;
    height: 40px;
  } ;
`;

function MainPagePartnersList({ partners, assets, content, logosDisplayedOnHomepage }) {
  const partnersToDisplay = logosDisplayedOnHomepage
    ? partners.filter((partner) => partner.fields.showOnHomepage)
    : partners.filter((partner) => partner.fields);

  const headline = content.find((v) => v.fields.identifier === 'cooperation-logos-text');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;
  const partnersImgAndName = partnersToDisplay.map((partner) => {
    const partnerImg = assets.find((asset) => partner.fields.logo.sys.id === asset.sys.id);
    return {
      name: partner.fields.name,
      link: partner.fields.linkUrl,
      imgUrl: partnerImg.fields.file.url,
      key: partner.fields.logo.sys.id,
      order: partner.fields.order,
    };
  });

  partnersImgAndName.sort((a, b) => (a.order > b.order ? -1 : 1));

  return (
    <StyledPartners logosDisplayedOnHomepage={logosDisplayedOnHomepage}>
      <h3>{headlineTitle}</h3>
      <p>{headlineDescription}</p>
      <StyledPartner>
        {partnersImgAndName.map((partner) => (
          <StyledPartnerLogo key={partner.key}>
            <a href={partner.link}>
              <StyledPartnerImg src={partner.imgUrl} alt={`Logo ${partner.link}`} />
            </a>
          </StyledPartnerLogo>
        ))}
      </StyledPartner>
    </StyledPartners>
  );
}

export default MainPagePartnersList;
