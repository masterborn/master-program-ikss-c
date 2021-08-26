import cmsClient from '@root/api/cmsApi';
import MainPageSponsorsList from '@root/components/main/partners/MainPagePartnersList';
import Banner from '@root/components/main/projects/Banner/banner';
import Highlights from '@root/components/main/Values/highlights';

const ENTRIES = ['basicContent', 'projects', 'partnerLogos', 'boardMembers'];

function HomePage(props) {
  // const { partners, assets, content, banner } = props;
  console.log(props);
  return (
    <>
      {/* <Banner content={content} asset={assets} />
      <Highlights content={content} assets={assets} />
      <MainPageSponsorsList partners={partners} assets={assets} /> */}
    </>
  );
}
export default HomePage;

const groupByCollection = (itemsArray) => {
  const obj = {};
  for (const entry of ENTRIES) {
    obj[entry] = itemsArray.data.items.filter((x) => x.sys.contentType.sys.id === entry);
  }
  return obj;
};

function transformBanerData(entries, assets) {
  const { basicContent } = groupByCollection(entries);
  const videoUrl = assets.data.items.find((a) => a.fields.title === 'na strone ikss');
  const bannerData = basicContent.filter(
    (v) =>
      v.fields.identifier === 'social-youtube' ||
      v.fields.identifier === 'social-instagram' ||
      v.fields.identifier === 'social-linkedin' ||
      v.fields.identifier === 'social-facebook',
  );
  bannerData.push(videoUrl);
  return bannerData;
}

async function getProps() {
  const entries = await cmsClient.getAllEntries();
  const assets = await cmsClient.getAllAssets();
  const banner = transformBanerData(entries, assets);
  const projects = {};
  const props = [banner, projects];
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
