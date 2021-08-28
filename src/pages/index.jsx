import getAllAssets from '@root/api/assetClient';
import MainPageSponsorsList from '@root/components/main/partners/MainPagePartnersList';
import Banner from '@root/components/main/projects/Banner/banner';
import MainPageProjectList from '@root/components/main/projects/MainPageProjectList';
import Highlights from '@root/components/main/Values/highlights';
import { getBasicContent, getPartnerLogos, getProjects } from '../api/cmsClient/index';

function HomePage(props) {
  const { partners, assets, content, projects } = props;
  return (
    <>
      <Banner content={content} asset={assets} />
      <Highlights content={content} assets={assets} />
      <MainPageProjectList projects={projects} assets={assets} />
      <MainPageSponsorsList partners={partners} assets={assets} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const projects = await getProjects();
  const content = await getBasicContent();
  const assets = await getAllAssets();
  const partners = await getPartnerLogos();

  return {
    props: {
      projects,
      content,
      assets,
      partners,
    },
  };
}
