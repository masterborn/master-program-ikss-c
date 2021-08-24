import getAllAssets from '@root/api/assetClient';
import { getBasicContent } from '@root/api/cmsClient';

function HomePage(props) {
  return <>MainPage</>;
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
