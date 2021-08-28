import ButtonGroup from '@root/components/UI/ButtonGroup/buttonGroup';
import { useState } from 'react';
import styled from 'styled-components';
import ProjectToDisplay from './ProjectToDisplay/ProjectToDisplay';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function extractHomeProjectImage(imagesId, assets) {
  const url = [];
  for (const img of imagesId) {
    url.push(assets.find((image) => image.sys.id === img).fields.file.url);
  }
  return url;
}
function mapProjectsWithImageUrl(projects, urls) {
  projects.forEach((element, index) => {
    element.imageUrl = urls[index];
  });
  return projects;
}
function MainPageProjectList(props) {
  const [projectShow, setProjectShow] = useState(0);
  const { projects, assets } = props;
  const homepageProjects = projects.filter((p) => p.fields.showOnHomepage);

  console.log(homepageProjects);
  const imagesAsset = homepageProjects.filter((i) => i.fields);
  const imageAssetId = imagesAsset.map((el) => el.fields.image.sys.id);
  const imagesUrl = extractHomeProjectImage(imageAssetId, assets);
  const projectsWithImages = mapProjectsWithImageUrl(homepageProjects, imagesUrl);
  console.log(projectsWithImages);
  // const { homepageProjects, imagesUrl } = projects;
  const titles = homepageProjects.map((t) => t.fields.title);
  // const dates = homepageProjects.map((d) => d.fields.date);
  // const [d1, d2, d3] = homepageProjects.map((d) => d.fields.description.content);
  const callbackToChild = (index) => {
    setProjectShow(index);
  };
  return (
    <Div>
      <h3>Najnowsze projekty</h3>
      <ButtonGroup titles={titles} parentCallback={callbackToChild} />
      <ProjectToDisplay project={projectsWithImages[projectShow]} />
    </Div>
  );
}

export default MainPageProjectList;
