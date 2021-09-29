import Section from '@root/components/UI/Section/section';
import PageHead from '@root/components/Head';
import MainPagePartnersList from '@root/components/main/partners/MainPagePartnersList';
import Highlights from '@root/components/main/Values/highlights';
import { getBasicContent, getPartnerLogos } from '@root/api/cmsClient';
import getAllAssets from '../../api/assetClient/index';

function Cooperation(props) {
  const { assets, content, partners } = props;
  const topSection = content.filter((x) => x.fields.identifier === 'cooperation-top-section');
  const bottomCta = content.filter((x) => x.fields.identifier === 'cooperation-bottom-cta');
  const head = content.filter((x) => x.fields.identifier === 'cooperation-meta');

  return (
    <>
      <PageHead head={head} />
      <Section shortTopParagraph content={topSection} assets={assets} />
      <Highlights content={content} assets={assets} />
      <MainPagePartnersList partners={partners} assets={assets} content={content} />
      <Section content={bottomCta} />
    </>
  );
}
export default Cooperation;

export async function getStaticProps() {
  const partners = await getPartnerLogos();
  const assets = await getAllAssets();
  const content = await getBasicContent();
  return {
    props: {
      partners,
      assets,
      content,
    },
  };
}
