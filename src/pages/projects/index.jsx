import React from 'react';
import ProjectItem from '@root/components/projects/ProjectItem/ProjectItem';
import styled from 'styled-components';
import { getProjects } from '../../api/cmsClient/index';
import getAllAssets from '../../api/assetClient/index';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-gap: 10px;
  justify-items: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Info = styled.div`
  grid-column: 1/3;
  justify-self: center;
  width: 1200px;
  height: 352px;
  background-color: blue;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    display: block;
    width: 375px;
    height: 220px;
  }
`;

function ProjectList({ projects, assets }) {
  const renderProjects = projects.map((p) => (
    <ProjectItem project={p} key={p.fields.title} assets={assets} />
  ));
  const projectsArray = Array.from(renderProjects);
  if (projectsArray.length > 7) {
    for (let i = 0; i < renderProjects.length; i += 1) {
      if (i === 4) {
        projectsArray.splice(i, 0, <Info />);
      }
    }
  }
  return <StyledDiv>{projectsArray}</StyledDiv>;
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
