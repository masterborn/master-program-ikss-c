import getAllAssets from '@root/api/assetClient';
import Section from '@root/components/UI/Section/section';
import { getBasicContent } from '@root/api/cmsClient';

function Cooperation(props) {
  const { assets, content } = props;
  const topSection = content.filter((x) => x.fields.identifier === 'cooperation-top-section');
  const bottomCta = content.filter((x) => x.fields.identifier === 'cooperation-bottom-cta');

  return (
    <>
      <Section shortTopParagraph content={topSection} assets={assets} />
      <Section content={bottomCta} />
    </>
  );
}
export default Cooperation;

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
