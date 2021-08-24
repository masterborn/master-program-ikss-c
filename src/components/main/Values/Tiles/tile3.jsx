import React from 'react';

function Tile3({ context }) {
  const tile3 = context.basicContent.find((v) => v.fields.identifier === 'homepage-tile-3');
  const tile3Title = tile3.fields.title;
  const tile3Description = tile3.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;
  const tile3Asset = context.assets.find((v) => v.fields.title === 'Frame 170 (1)');
  const tile3Img = tile3Asset.fields.file.url;

  return (
    <>
      <div
        style={{
          height: 456,
          width: 384,
          textAlign: 'center',
        }}
      >
        <h5>{tile3Title}</h5>
        <img alt="tile3" src={tile3Img} />
        <p>{tile3Description}</p>
      </div>
    </>
  );
}

export default Tile3;
