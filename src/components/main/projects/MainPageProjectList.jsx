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
  @media (max-width: 860px) {
    margin-top: 50px;
  }
`;
const Wrapper = styled.div`
  @media (max-width: 860px) {
    margin-top: 0px;
    z-index: 100;
  }
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
  const titles = homepageProjects.map((t) => t.fields.title).slice(0, 3);

  const callbackToChild = (index) => {
    setProjectShow(index);
  };
  return (
    <Div>
      <h3>Najnowsze projekty</h3>
      <ButtonGroup titles={titles} parentCallback={callbackToChild} activeProjectId={projectShow} />
      <ProjectToDisplay project={projectsWithImages[projectShow]} activeProject={projectShow} />
      <Wrapper>
        <SecondaryButton marginTop="30px" as="a" href="/projekty">
          Zobacz wszystkie projekty
        </SecondaryButton>
      </Wrapper>
    </Div>
  );
}

export default MainPageProjectList;
