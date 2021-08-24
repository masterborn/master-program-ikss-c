import React from 'react';

function Tile2({ context }) {
  const tile2 = context.basicContent.find((v) => v.fields.identifier === 'homepage-tile-2');
  const tile2Title = tile2.fields.title;
  const tile2Description = tile2.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;
  const tile2Asset = context.assets.find((v) => v.fields.title === 'Frame 170');
  const tile2Img = tile2Asset.fields.file.url;

  return (
    <>
      <div
        style={{
          height: 456,
          width: 384,
          textAlign: 'center',
        }}
      >
        <h5>{tile2Title}</h5>
        <img alt="tile2" src={tile2Img} />
        <p>{tile2Description}</p>
      </div>
    </>
  );
}

export default Tile2;
