import getAllAssets from '@root/api/assetClient';
import { getBasicContent } from '@root/api/cmsClient';
import Banner from '@root/components/main/projects/Banner/banner';

function HomePage({ content, assets }) {
  return (
    <>
      <Banner content={content} asset={assets} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const content = await getBasicContent();
  const assets = await getAllAssets();

  return {
    props: {
      content,
      assets,
    },
  };
}
