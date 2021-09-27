import React, { useState } from 'react';
import ProjectItem from '@root/components/projects/ProjectItem/ProjectItem';
import styled from 'styled-components';
import Section from '@root/components/UI/Section/section';
import Info from '@root/components/UI/Info/Info';
import ButtonYear from '@root/components/UI/ButtonGroup/buttonYear';
import { getBasicContent, getProjects } from '../../api/cmsClient/index';
import getAllAssets from '../../api/assetClient/index';

const StyledDiv = styled.div`
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: ${(props) => (props.countOfItems === 1 ? '1' : '2')};
  width: ${(props) => (props.countOfItems === 1 ? '50%' : '100%')};
  column-gap: 24px;
  @media (max-width: 860px) {
    column-count: 1;
    width: 95%;
    column-gap: 24px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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

function ProjectList({ projects, assets, content }) {
  const [selectedYear, setSelectedYear] = useState(2021);
  const projectsWithYears = extractProjectsDataFromProps(projects);
  const topSection = content.filter((x) => x.fields.identifier === 'projects-top-section');
  const bottomCta = content.filter((x) => x.fields.identifier === 'projects-bottom-cta-text');
  const presentedProjectByYear = projectsWithYears.proj.filter(
    (project) => project?.year === selectedYear,
  );
  const renderProjects = presentedProjectByYear.map((project) => (
    <ProjectItem project={project} key={project.sys.id} assets={assets} />
  ));
  return (
    <>
      <Section content={topSection} assets={assets} />
      <ButtonDiv>
        <ButtonYear
          years={projectsWithYears.year}
          selectYearHandler={(index) => setSelectedYear(index)}
          activeYear={selectedYear}
        />
        <StyledDiv countOfItems={renderProjects.length}>{renderProjects.slice(0, 4)}</StyledDiv>
        <div>{renderProjects.length >= 7 && <Info />}</div>
        <StyledDiv>{renderProjects.slice(4)}</StyledDiv>
      </ButtonDiv>
      <Section content={bottomCta} />
    </>
  );
}

export default ProjectList;

export async function getStaticProps() {
  const projects = await getProjects();
  const assets = await getAllAssets();
  const content = await getBasicContent();
  return {
    props: {
      projects,
      assets,
      content,
    },
  };
}
