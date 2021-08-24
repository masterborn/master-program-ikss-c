import Banner from '@root/components/main/projects/Banner/banner';
import Highlights from '@root/components/main/Values/highlights';
import getAllAssets from '@root/api/asssetClient';
import { getBasicContent } from '../api/cmsClient/index';

function HomePage(props) {
  return (
    <>
      <Banner context={props} />
      <Highlights context={props} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const basicContent = await getBasicContent();
  const assets = await getAllAssets();
  return {
    props: {
      basicContent,
      assets
    },
  };
}
