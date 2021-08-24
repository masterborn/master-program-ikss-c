import React from 'react';
import { SecondaryButton } from '../../../../UI/Button/Button';

function Headline({ content }) {
  const { title } = content.fields;
  const description = content.fields.text1.content[0].content[0].value;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginTop: '50px',
        marginLeft: '300px',
      }}
    >
      <h1 style={{ maxWidth: '490px' }}>{title}</h1>
      <p style={{ maxWidth: '384px' }}>{description}</p>
      <SecondaryButton>Skontaktuj sie</SecondaryButton>
    </div>
  );
}

export default Headline;
