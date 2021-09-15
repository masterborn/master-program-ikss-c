import getAllAssets from '@root/api/assetClient';
import MainPagePartnersList from '@root/components/main/partners/MainPagePartnersList';
import Banner from '@root/components/main/projects/Banner/banner';
import MainPageProjectList from '@root/components/main/projects/MainPageProjectList';
import Highlights from '@root/components/main/Values/highlights';
import Form from '@root/components/Form/Form';
import { getBasicContent, getPartnerLogos, getProjects } from '../api/cmsClient/index';

function HomePage(props) {
  const { partners, assets, content, projects } = props;
  return (
    <>
      <Banner content={content} asset={assets} />
      <Highlights content={content} assets={assets} />
      <MainPageProjectList projects={projects} assets={assets} />
      <MainPagePartnersList home partners={partners} assets={assets} content={content} />
      <Form content={content} />
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
