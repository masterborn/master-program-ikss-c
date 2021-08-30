import React from 'react';
import styled from 'styled-components';

const StyledTiles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTile = styled.div`
  margin: 24px;
  height: 456px;
  width: 384px;
  position: relative;
`;

const StyledTileShadow = styled.div`
  height: 394px;
  width: 384px;
  box-shadow:
    3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07), 1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725), 0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035), 0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  position: absolute;
  left: 0;
  bottom: 0;
`;


function Tiles({ content, assets }) {
  const tilesToDisplay = content.filter(
    (tile) =>
      tile.fields.identifier === 'homepage-tile-1' ||
      tile.fields.identifier === 'homepage-tile-2' ||
      tile.fields.identifier === 'homepage-tile-3',
  );
  
  const partnersImgAndName = tilesToDisplay.map((tile) => {
  const tileImg = assets.find((asset) => tile.fields.image1.sys.id === asset.sys.id);
  const tileDescription = tile.fields.text1.content
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
    <StyledTiles>
      {partnersImgAndName.map((tile) => (
        <StyledTile key={tile.key}>
          <img src={tile.imgUrl} alt={tile.title} />
          <h5 style={{ marginTop: '20px' }}>{tile.title}</h5>
          <p style={{ margin: '16px 24px 48px' }}>{tile.description}</p>
          <StyledTileShadow> </StyledTileShadow>
        </StyledTile>
      ))}
    </StyledTiles>
  );
}

export default Tiles;
