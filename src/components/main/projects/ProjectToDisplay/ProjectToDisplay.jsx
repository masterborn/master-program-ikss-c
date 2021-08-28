import React from 'react';
import styled from 'styled-components';
import { steelTints } from '../../../../styles/GlobalStyles';

const Div = styled.div`
  width: 950px;
  height: 950px;
  border-radius: 25px 25px 0px 0px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
`;

function ProjectToDisplay({ project }) {
  const { imageUrl, fields } = project;
  const { title } = fields;
  const { date } = fields;
  const description = fields.description.content
    .map((x) => x.content.find((y) => y.value).value)
    .toString();
  return (
    <Div>
      {/* <img src={imageUrl} alt="main" /> */}
      <div>{title}</div>
      <div>{date}</div>
      <div>{description}</div>
    </Div>
  );
}

export default ProjectToDisplay;
