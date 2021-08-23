import React from 'react';

function MainPagePartnersList({ partners, assets }) {
  const partnersToDisplay = partners.filter((partner) => partner.fields.showOnHomepage);

  const partnersImgAndName = partnersToDisplay.map((partner) => {
    const partnerImg = assets.find((asset) => partner.fields.logo.sys.id === asset.sys.id);
    return {
      name: partner.fields.name,
      imgUrl: partnerImg.fields.file.url,
      key: partner.fields.logo.sys.id,
    };
  });

  return (
    <div>
      <h3>Hello Parners</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '30px' }}>
        {partnersImgAndName.map((partner) => (
          <div key={partner.key}>
            <img src={partner.imgUrl} alt="" />
            <br />
            {partner.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPagePartnersList;
