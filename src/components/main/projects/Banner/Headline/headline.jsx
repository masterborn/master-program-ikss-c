import React from 'react';
import { SecondaryButton } from '../../../../UI/Button/Button';

function Headline({ content }) {
  const { title } = content.fields;
  const description = content.fields.text1.content[0].content[0].value;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1
      // style={{
      //   marginRight: 90,
      //   marginLeft: 120,
      //   marginTop: 77,
      //   marginBottom: 32,
      //   maxWidth: 416,
      //   maxHeight: 505,
      // }}
      >
        {title}
      </h1>
      <p style={{ maxWidth: '384px' }}>{description}</p>
      <SecondaryButton>Skontaktuj sie</SecondaryButton>
    </div>
  );
}

export default Headline;
