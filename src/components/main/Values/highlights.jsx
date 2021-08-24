import React from 'react';
import Tile1 from './Tiles/tile1';
import Tile2 from './Tiles/tile2';
import Tile3 from './Tiles/tile3';

function Highlights({ content, assets }) {

  const headline = content.find((v) => v.fields.identifier === 'homepage-values');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content.find((v) => v.nodeType === 'paragraph');
  const headlineDescription1 = headlineDescription.content.find((v) => v.nodeType === 'text');
  const headlineParagraph = headlineDescription1.value;
  return (
    <>
      <div
        style={{
          height: 1000,
          width: 1000,
          textAlign: 'center',
        }}
      >
        <h3>{headlineTitle}</h3>
        <p>{headlineParagraph}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Tile1 context={content} assets={assets} />
          <Tile2 context={content} assets={assets} />
          <Tile3 context={content} assets={assets} />
        </div>
      </div>
    </>
  );
}

export default Highlights;
