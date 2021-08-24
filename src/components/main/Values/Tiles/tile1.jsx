import React from 'react';

function Tile1({ context }) {

    const tile1 = context.basicContent.find((v) => v.fields.identifier === 'homepage-tile-1');
    const tile1Title = tile1.fields.title;
    const tile1Description = tile1.fields.text1.content
      .find((v) => v.nodeType === 'paragraph').content.find((v) => v.nodeType === 'text').value;
    const tile1Asset = context.assets.find((v) => v.fields.title === 'Group 163');
    const tile1Img = tile1Asset.fields.file.url;

    return (
      <>
        <div
          style={{
            height: 456,
            width: 384,
            textAlign: 'center',
          }}
        >
          <h5>{tile1Title}</h5>
          <img alt="tile1" src={tile1Img} />
          <p>{tile1Description}</p>
        </div>
      </>
    );
}

export default Tile1;
