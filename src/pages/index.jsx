import cmsClient from '@root/api/cmsApi';
import MainPageProjectList from '@root/components/main/projects/MainPageProjectList';
import MainPageSponsorsList from '@root/components/main/partners/MainPagePartnersList';
import Banner from '@root/components/main/projects/Banner/banner';
import Highlights from '@root/components/main/Values/highlights';
import { extractBanerData, extractHomeProjectData } from '../utils/index';

function HomePage(props) {
  const { partners, assets, content } = props;
  const { homeProjects } = props.props;
  console.log(homeProjects);
  return (
    <>
      {/* <Banner content={content} asset={assets} />
      <Highlights content={content} assets={assets} />
      <MainPageSponsorsList partners={partners} assets={assets} /> */}
      <MainPageProjectList projects={homeProjects} />
    </>
  );
}
export default HomePage;

async function getProps() {
  const entries = await cmsClient.getAllEntries();
  const assets = await cmsClient.getAllAssets();
  const banner = extractBanerData(entries, assets);
  const homeProjects = extractHomeProjectData(entries, assets);
  const props = { banner, homeProjects };
  return props;
}

export async function getStaticProps() {
  try {
    const props = await getProps();
    return {
      props: {
        props,
      },
      revalidate: 10,
    };
  } catch (e) {
    return { notFound: true };
  }
}
