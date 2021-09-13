import ButtonGroup from '@root/components/UI/ButtonGroup/buttonGroup';
import { useState } from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '@root/components/UI/Button/Button';
import ProjectToDisplay from './ProjectToDisplay/ProjectToDisplay';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

function extractHomeProjectImage(imagesId, assets) {
  const url = [];
  for (const img of imagesId) {
    url.push(assets.find((image) => image.sys.id === img).fields.file.url);
  }
  return url;
}
function mapProjectsWithImageUrl(projects, urls) {
  projects.forEach((project, index) => {
    if (project.fields.videoUrl) {
      project.imageUrl = project.fields.videoUrl;
      project.isVideo = true;
    } else {
      project.imageUrl = urls[index];
      project.isVideo = false;
    }
  });
  return projects;
}
function MainPageProjectList({ projects, assets }) {
  const [projectShow, setProjectShow] = useState(0);
  const homepageProjects = projects.filter((p) => p.fields.showOnHomepage);
  const homepageProjectsSorted = homepageProjects.sort((a, b) => b.fields.order - a.fields.order);
  const imagesAsset = homepageProjectsSorted.filter((i) => i.fields);
  const imageAssetId = imagesAsset.map((el) => el.fields.image.sys.id);
  const imagesUrl = extractHomeProjectImage(imageAssetId, assets);
  const projectsWithImages = mapProjectsWithImageUrl(homepageProjects, imagesUrl);
  const titles = homepageProjects.map((t) => t.fields.title);

  const callbackToChild = (index) => {
    setProjectShow(index);
  };
  return (
    <Div>
      <h3>Najnowsze projekty</h3>
      <ButtonGroup titles={titles} parentCallback={callbackToChild} activeProjectId={projectShow} />
      <ProjectToDisplay project={projectsWithImages[projectShow]} activeProject={projectShow} />
      <SecondaryButton marginTop="30px" as="a" href="/projects">
        Zobacz wszystkie projekty
      </SecondaryButton>
    </Div>
  );
}

export default MainPageProjectList;
