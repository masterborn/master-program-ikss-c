import React from 'react';

function Tiles({ context, assets }) {
    const tilesToDisplay = context.filter(
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
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {partnersImgAndName.map((tile) => (
          <div
            style={{
                margin: '24px',
                height: '456px',
                width: '384px',
                position: 'relative',
            }}
            key={tile.key}
          >
            <img src={tile.imgUrl} alt="" />
            <h5 style={{ marginTop: '20px' }} >{tile.title}</h5>
            <p style={{ margin: '16px 24px 48px 24px' }}>{tile.description}</p>
            <div
              style={{
                height: '394px',
                width: '384px',
                boxShadow:
                  '3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07), 1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725), 0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035), 0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275)',
                borderRadius: '16px',
                position: 'absolute',
                left: '0',
                bottom: '0',
              }}
            >
              {' '}
            </div>
          </div>
        ))}
      </div>
    );
}

export default Tiles;
