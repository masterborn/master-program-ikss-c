import { entriesCollection, assetsCollection } from '@root/api/apiClient';
import MainPageSponsorsList from '@root/components/main/partners/MainPagePartnersList';
import Banner from '@root/components/main/projects/Banner/banner';
import Highlights from '@root/components/main/Values/highlights';

const ENTRIES = ['basicContent', 'projects', 'partnerLogos', 'boardMembers'];

function HomePage(props) {
  const { partners, assets, content } = props;
  return (
    <>
      <Banner content={content} asset={assets} />
      <Highlights content={content} assets={assets} />
      <MainPageSponsorsList partners={partners} assets={assets} />
    </>
  );
}
export default HomePage;

const getCollection = (array) => {
  const obj = {};
  for (const entry of ENTRIES) {
    obj[entry] = array.filter((x) => x.sys.contentType.sys.id === entry);
  }
  return obj;
};

export async function getStaticProps() {
  try {
    const entries = await entriesCollection.getData();
    const assets = await assetsCollection.getData();
    const collections = getCollection(entries.data.items);
    return {
      props: {
        content: collections.basicContent,
        projects: collections.projects,
        partners: collections.partnerLogos,
        members: collections.boardMembers,
        assets: assets.data.items,
      },
      revalidate: 10,
    };
  } catch (e) {
    return { notFound: true };
  }
}
