import getAllAssets from '@root/api/assetClient';
import Mission from '@root/aboutUs/mission and histry/Mission';
import Histry from '@root/aboutUs/mission and histry/Histry';
import { getBasicContent } from '@root/api/cmsClient';

function AboutUsPage(props) {
  const { assets, content } = props;
  return (
    <>
      <Mission content={content} assets={assets} />
      <Histry content={content} assets={assets} />
    </>
  );
}
export default AboutUsPage;

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
