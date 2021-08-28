import ButtonGroup from '@root/components/UI/ButtonGroup/buttonGroup';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MainPageProjectList({ projects }) {
  const { homepageProjects, imagesUrl } = projects;
  console.log(homepageProjects, imagesUrl);
  const titles = homepageProjects.map((t) => t.fields.title);
  const dates = homepageProjects.map((d) => d.fields.date);
  const [d1, d2, d3] = homepageProjects.map((d) => d.fields.description.content);
  return (
    <Div>
      <h3>Najnowsze projekty</h3>
      <ButtonGroup titles={titles} />
    </Div>
  );
}

export default MainPageProjectList;
