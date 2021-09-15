import React from 'react';
import styled from 'styled-components';

const StyledPartners = styled.div`
  text-align: center;
  max-width: 1188px;
  max-height: 796px;
  margin: 148px auto 132px;
  & h3 {
    margin: 32px;
  }
  & p {
    margin: 0 auto 80px;
    width: 635px;
    height: 64px;
  }
`;

const StyledPartner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StyledPartnerLogo = styled.div`
  display: flex;
  flex-basis: 20%;
  margin-bottom: 48px;
  -webkit-box-pack: center;
  justify-content: center;
`;

function MainPagePartnersList({ partners, assets, content, home}) {

  const partnersToDisplay = home
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
    <StyledPartners>
      <h3>{headlineTitle}</h3>
      <p>{headlineDescription}</p>
      <StyledPartner>
        {partnersImgAndName.map((partner) => (
          <StyledPartnerLogo key={partner.key}>
            <a href={partner.link}>
              <img src={partner.imgUrl} alt={`Logo ${partner.link}`} />
            </a>
          </StyledPartnerLogo>
        ))}
      </StyledPartner>
    </StyledPartners>
  );
}

export default MainPagePartnersList;
