import getAllAssets from '@root/api/assetClient';
import Mission from '@root/views/aboutUs/Mission/Mission';
import History from '@root/views/aboutUs/History/History';
import { getBasicContent } from '@root/api/cmsClient';

function AboutUsPage(props) {
  const { assets, content } = props;
  return (
    <>
      <Mission content={content} assets={assets} />
      <History content={content} assets={assets} />
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
