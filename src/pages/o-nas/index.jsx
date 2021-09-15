import getAllAssets from '@root/api/assetClient';
import Mission from '@root/aboutUs/Mission/Mission';
import History from '@root/aboutUs/History/History';
import Team from '@root/aboutUs/Team/Team';
import Section from '@root/components/UI/Section/section';
import { getBasicContent } from '@root/api/cmsClient';

function AboutUsPage(props) {
  const { assets, content } = props;
  const topSection = content.filter((x) => x.fields.identifier === 'about-us-top-section');
  const bottomCta = content.filter((x) => x.fields.identifier === 'about-us-bottom-cta');

  return (
    <>
      <Section content={topSection} assets={assets} />
      <Mission content={content} assets={assets} />
      <History content={content} assets={assets} />
      <Team content={content} assets={assets} />
      <Section content={bottomCta} />
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
