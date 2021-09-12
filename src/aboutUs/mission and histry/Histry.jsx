import React from 'react';

function Histry({ content, assets }) {
    const headline = content.find((v) => v.fields.identifier === 'about-us-content-2');
    const headlineTitle = headline.fields.title;
    const headlineDescription1Part = headline.fields.text1.content[0].content[0].value;
    const headlineDescription2Part = headline.fields.text2.content[0].content[0].value;
    const headlineDescription3Part = headline.fields.text2.content[1].content[0].value;
    const histryImage1 = assets.find((v) => v.fields.title === 'Rectangle 21').fields.file.url;
    const histryImage2 = assets.find((v) => v.fields.title === 'Rectangle 22').fields.file.url;

    return (
      <>
        <>
        <img src={histryImage1} alt="Members of the IKSS association" />
        <h2>{headlineTitle}</h2>
        <p>{headlineDescription1Part}</p>
        </>
        <>
        <img src={histryImage2} alt="Members of the IKSS association" />
        <p>{headlineDescription2Part}</p>
        <p>{headlineDescription3Part}</p>
        </>
      </>
    );
}
export default Histry;
