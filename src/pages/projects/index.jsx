import React, { useState } from 'react';
import ProjectItem from '@root/components/projects/ProjectItem/ProjectItem';
import styled from 'styled-components';
import Info from '@root/components/UI/Info/Info';
import ButtonYear from '@root/components/UI/ButtonGroup/buttonYear';
import { getProjects } from '../../api/cmsClient/index';
import getAllAssets from '../../api/assetClient/index';

const StyledDiv = styled.div`
  column-count: 2;
  column-gap: 24px;
  column-fill: balance;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

const extractProjectsDataFromProps = (projects) => {
  const getYearFromProjects = projects.map((project) => ({
    ...project,
    year: +project.fields.date.split('-')[0],
  }));
  const sortedProjectList = getYearFromProjects.sort((a, b) => b.fields.order - a.fields.order);
  const date = sortedProjectList.map((t) => t.fields.date);
  const years = date.map((d) => new Date(d).getFullYear());
  const uniqueYear = [...new Set(years)].sort((a, b) => b - a);
  return { proj: sortedProjectList, year: uniqueYear };
};

function ProjectList({ projects, assets }) {
  const [selectedYear, setSelectedYear] = useState(2021);
  const projectsWithYears = extractProjectsDataFromProps(projects);
  const presentedProjectByYear = projectsWithYears.proj.filter(
    (project) => project?.year === selectedYear,
  );
  const renderProjects = presentedProjectByYear.map((pproject) => (
    <ProjectItem project={pproject} key={pproject.sys.id} assets={assets} />
  ));
  return (
    <ButtonDiv>
      <ButtonYear
        years={projectsWithYears.year}
        selectYearHandler={(index) => setSelectedYear(index)}
        activeYear={selectedYear}
      />
      <StyledDiv>{renderProjects.slice(0, 4)}</StyledDiv>
      <div>{renderProjects.length >= 7 && <Info />}</div>
      <StyledDiv>{renderProjects.slice(4)}</StyledDiv>
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
