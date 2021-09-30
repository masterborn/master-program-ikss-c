import getAllAssets from '@root/api/assetClient';
import PageHead from '@root/components/Head';
import MainPagePartnersList from '@root/components/main/partners/MainPagePartnersList';
import Banner from '@root/components/main/projects/Banner/banner';
import MainPageProjectList from '@root/components/main/projects/MainPageProjectList';
import HomepageValues from '@root/components/main/Values/Homopage/values';
import Form from '@root/components/Form/Form';
import { getBasicContent, getPartnerLogos, getProjects } from '../api/cmsClient/index';

function HomePage(props) {
  const { partners, assets, content, projects } = props;
    const head = content.filter((x) => x.fields.identifier === 'homepage-meta');
  return (
    <>
      <PageHead head={head} />
      <Banner content={content} asset={assets} />
      <HomepageValues content={content} assets={assets} />
      <MainPageProjectList projects={projects} assets={assets} />
      <MainPagePartnersList
        logosDisplayedOnHomepage
        partners={partners}
        assets={assets}
        content={content}
      />
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
