import React from 'react';
import styled from 'styled-components';
import extractImageUrl from '@root/utils';
import { PrimaryButton } from '../Button/Button';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.divHeight};
  margin: ${(props) => props.divMargin};
`;
const StyledParegraph = styled.p`
  max-width: ${(props) => props.paragraphWidth};
`;

function Section({ content, assets }) {
  const data = content.find((x) => x.fields);
  const { title, text1, image1, linkCaption } = data.fields;
  const description = text1.content.map((x) => x.content.find((y) => y.value).value).toString();
  const imageUrl = extractImageUrl(image1, assets);

  const divHeight = linkCaption ? '252px' : '358px';
  const divMargin = linkCaption ? '200px 0' : '0px';
  const paragraphWidth = linkCaption ? '635px' : '995px';
  return (
    <StyledDiv divHeight={divHeight} divMargin={divMargin}>
      {imageUrl && <img src={imageUrl} alt={`Logo ${title}`} />}
      {linkCaption ? <h3>{title}</h3> : <h1>{title}</h1>}
      <StyledParegraph paragraphWidth={paragraphWidth}>{description}</StyledParegraph>
      {linkCaption && <PrimaryButton>{linkCaption}</PrimaryButton>}
    </StyledDiv>
  );
}

export default Section;
