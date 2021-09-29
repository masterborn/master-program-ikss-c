import React from 'react';
import styled from 'styled-components';
import { color } from '@root/styles/GlobalStyles';

const StyledTiles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const StyledTile = styled.div`
  height: 382px;
  width: 384px;
  position: relative;
  background-color: ${color.white};
  border-radius: 16px;
  margin: 0;
  & h5 {
    margin: 20px 24px 0;
  }
  & p {
    margin: 16px 24px;
    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 28px;
      margin: 12px 24px 32px;
    }
  }
  @media (max-width: 1000px) {
    height: 350px;
    width: 327px;
  } ;
`;

const StyledTileShadow = styled.div`
  height: 382px;
  width: 384px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    height: 350px;
    width: 327px;
  };
`;

const StyledLogo = styled.img`
  width: 230px;
  height: 142px;
  @media (max-width: 1000px) {
    width: 197px;
    height: 121px;
    margin: 32px auto 0;
  };
`;

function Tiles({ content, assets }) {

  const tilesToDisplay = content.filter(
    (tile) =>
      tile.fields.identifier === 'cooperation-tile-1' ||
      tile.fields.identifier === 'cooperation-tile-2' ||
      tile.fields.identifier === 'cooperation-tile-3' ||
      tile.fields.identifier === 'cooperation-tile-4' ||
      tile.fields.identifier === 'cooperation-tile-5',
  );
  tilesToDisplay.sort((a, b) => (a.fields.identifier > b.fields.identifier ? 1 : -1));

  const partnersImgAndName = tilesToDisplay.map((tile) => {
    const tileImg = assets.find((asset) => tile.fields.image1.sys.id === asset.sys.id);
    const tileDescription = tile.fields.text1?.content
      .find((v) => v.nodeType === 'paragraph')
      .content.find((v) => v.nodeType === 'text').value;
    return {
      title: tile.fields.title,
      description: tileDescription,
      imgUrl: tileImg.fields.file.url,
      key: tile.fields.image1.sys.id,
    };
  });

  return (
    <>
      <StyledTiles>
        {partnersImgAndName.map((tile) => (
          <StyledTile key={tile.key}>
              <StyledTileShadow>
                <StyledLogo src={tile.imgUrl} alt={tile.title} />
                <h5>{tile.title}</h5>
                <p>{tile.description}</p>
              </StyledTileShadow>
          </StyledTile>
        ))}
      </StyledTiles>
    </>
  );
}

export default Tiles;
