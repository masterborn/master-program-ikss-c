import MainPageProjectList from '@root/components/main/projects/MainPageProjectList';
import { getProjects } from '../api/cmsClient/index';

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
  try {
    const projects = await getProjects();
    const showOnMainPage = projects.filter((p) => p.fields.showOnHomepage);
    return {
      props: {
        projects: showOnMainPage,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
}
