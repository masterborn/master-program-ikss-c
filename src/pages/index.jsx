import getAllAssets from '@root/api/assetClient';
import MainPageProjectList from '@root/components/main/projects/MainPageProjectList';
import MainPageSponsorsList from '@root/components/main/partners/MainPagePartnersList';
import { getBasicContent, getPartnerLogos, getProjects } from '../api/cmsClient/index';

function HomePage(props) {
  const { projects, partners, assets } = props;
  return (
    <>
      <MainPageProjectList projects={projects} />
      <MainPageSponsorsList partners={partners} assets={assets}/>
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const projects = await getProjects();
  const content = await getBasicContent();
  const assets = await getAllAssets()
  const partners =await getPartnerLogos()

  return {
    props: {
      projects,
      content,
      assets,
      partners,
    },
  };
}
