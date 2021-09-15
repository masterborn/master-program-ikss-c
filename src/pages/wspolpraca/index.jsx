import Section from '@root/components/UI/Section/section';
import MainPagePartnersList from '@root/components/main/partners/MainPagePartnersList';
import { getBasicContent, getPartnerLogos } from '@root/api/cmsClient';
import getAllAssets from '../../api/assetClient/index';

function Cooperation(props) {
  const { assets, content, partners } = props;
  const topSection = content.filter((x) => x.fields.identifier === 'cooperation-top-section');
  const bottomCta = content.filter((x) => x.fields.identifier === 'cooperation-bottom-cta');
  return (
    <>
      <Section short content={topSection} assets={assets} />
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
