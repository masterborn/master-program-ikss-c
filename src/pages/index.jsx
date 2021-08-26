import cmsClient from '@root/api/cmsApi';
import MainPageSponsorsList from '@root/components/main/partners/MainPagePartnersList';
import Banner from '@root/components/main/projects/Banner/banner';
import Highlights from '@root/components/main/Values/highlights';

const ENTRIES = ['basicContent', 'projects', 'partnerLogos', 'boardMembers'];

function HomePage(props) {
  const { partners, assets, content, banner } = props;
  console.log(content);
  return (
    <>
      <Banner content={content} asset={assets} />
      <Highlights content={content} assets={assets} />
      <MainPageSponsorsList partners={partners} assets={assets} />
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
  // const socialYt = basicContent.find((v) => v.fields.identifier === 'social-youtube').fields.linkUrl;
  // const socialInsta = basicContent.find((v) => v.fields.identifier === 'social-instagram').fields
  //   .linkUrl;
  // const socialLin = basicContent.find((v) => v.fields.identifier === 'social-linkedin').fields.linkUrl;
  // const socialFb = basicContent.find((v) => v.fields.identifier === 'social-facebook').fields.linkUrl;
  // const banner = basicContent.find((v) => v.fields.identifier === 'homepage-top-section');
  const videoUrl = assets.find((a) => a.fields.title === 'na strone ikss').fields.file.url;

  const test = basicContent.filter(
    (v) =>
      v.fields.identifier === 'social-youtube' ||
      v.fields.identifier === 'social-instagram' ||
      v.fields.identifier === 'social-linkedin' ||
      v.fields.identifier === 'social-facebook',
  );

  //  return [socialYt, socialInsta, socialLin, socialFb, banner, videoUrl];
  return test;
}

export async function getStaticProps() {
  try {
    const entries = await cmsClient.getAllEntries();
    const assets = await cmsClient.getAllAssets();
    const collections = groupByCollection(entries);
    const banner = transformBanerData(entries, assets);
    return {
      props: {
        banner,
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
