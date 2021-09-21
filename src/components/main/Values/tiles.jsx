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
  height: ${(props) => (props.displayOnHomePage ? '456px' : '382px')};
  width: 384px;
  position: relative;
  background-color: ${color.white};
  border-radius: 16px;
  & h5 {
    margin: 20px 24px 0 24px;
  }
  & p {
    margin: ${(props) => (props.displayOnHomePage ? '16px 24px 48px' : '16px 24px 32px')};
  }
`;

const StyledTileShadow = styled.div`
  height: ${(props) => (props.displayOnHomePage ? '394px' : '382px')};
  width: 384px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  position: absolute;
  left: 0;
  bottom: 0;
`;


function Tiles({ content, assets, displayOnHomePage }) {
  const tilesToDisplay = displayOnHomePage
    ? content.filter(
        (tile) =>
          tile.fields.identifier === 'homepage-tile-1' ||
          tile.fields.identifier === 'homepage-tile-2' ||
          tile.fields.identifier === 'homepage-tile-3',
      )
    : content.filter(
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
        <StyledTile displayOnHomePage key={tile.key}>
          {displayOnHomePage ? (
            <>
              <img src={tile.imgUrl} alt={tile.title} />
              <h5>{tile.title}</h5>
              <p>{tile.description}</p>
              <StyledTileShadow displayOnHomePage> </StyledTileShadow>
            </>
          ) : (
            <StyledTileShadow>
              <img src={tile.imgUrl} alt={tile.title} />
              <h5>{tile.title}</h5>
              <p>{tile.description}</p>
            </StyledTileShadow>
          )}
        </StyledTile>
      ))}
    </StyledTiles>
  );
}

export default Tiles;
