import React from 'react';
import Tiles from './tiles';

function Highlights({ content, assets }) {

  const headline = content.find((v) => v.fields.identifier === 'homepage-values');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content.find((v) => v.nodeType === 'paragraph').content.find((v) => v.nodeType === 'text').value;

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginTop: '233px'
        }}
      >
        <h3>{headlineTitle}</h3>
        <p style={{ width: '551px', height: '64px', margin: '40px auto 40px auto' }} >{headlineDescription}</p>
        <div
          style={{
            width: '100%',
          }}>
          <Tiles context={content} assets={assets} />
        </div>
      </div>
    </>
  );
}

export default Highlights;
