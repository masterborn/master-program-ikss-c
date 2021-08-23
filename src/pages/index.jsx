import getAllAssets from '@root/api/assetClient';
import MainPageProjectList from '@root/components/main/projects/MainPageProjectList';
import { getBasicContent, getProjects } from '../api/cmsClient/index';

function HomePage(props) {
  const { projects } = props;
  return (
    <>
      <MainPageProjectList projects={projects} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const projects = await getProjects();
  const content = await getBasicContent();
  const assets = await getAllAssets()

  return {
    props: {
      projects,
      content,
      assets,
    },
  };
}
