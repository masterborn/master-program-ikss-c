import React, { useState } from 'react';
import ProjectItem from '@root/components/projects/ProjectItem/ProjectItem';
import styled from 'styled-components';
import Info from '@root/components/UI/Info/Info';
import ButtonYear from '@root/components/UI/ButtonGroup/buttonYear';
import { getProjects } from '../../api/cmsClient/index';
import getAllAssets from '../../api/assetClient/index';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-gap: 5px;
  justify-items: center;
  background-color: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

function calculateInfoBanner(projectsArray) {
  if (projectsArray.length > 7) {
    for (let i = 0; i < projectsArray.length; i += 1) {
      if (i === 4) {
        projectsArray.splice(i, 0, <Info />);
      }
    }
  }
}

function ProjectList({ projects, assets }) {
  const [selectedYear, setSelectedYear] = useState(2021);
  const copiedProjects = [...projects];
  const transformedProjects = copiedProjects.map((p) => ({
    ...p,
    year: +p.fields.date.split('-')[0],
  }));
  const sortedList = transformedProjects.sort((a, b) => b.fields.order - a.fields.order);
  const date = sortedList.map((t) => t.fields.date);
  const years = date.map((d) => new Date(d).getFullYear());
  const uniqueYear = [...new Set(years)].sort((a, b) => b - a);
  const renderProjects = sortedList.map((p) => (
    <ProjectItem project={p} key={p.fields.title} assets={assets} />
  ));
  const projectsArray = Array.from(renderProjects);

  calculateInfoBanner(projectsArray);

  const callbackToChild = (index) => {
    setSelectedYear(index);
  };
  const presentedProjectByYear = projectsArray.filter(
    (p) => p.props?.project?.year === selectedYear,
  );
  return (
    <ButtonDiv>
      <ButtonYear years={uniqueYear} parentCallback={callbackToChild} activeYear={selectedYear} />
      <StyledDiv>{presentedProjectByYear}</StyledDiv>
    </ButtonDiv>
  );
}

export default ProjectList;

export async function getStaticProps() {
  const projects = await getProjects();
  const assets = await getAllAssets();

  return {
    props: {
      projects,
      assets,
    },
  };
}
