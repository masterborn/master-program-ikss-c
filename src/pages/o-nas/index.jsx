import getAllAssets from '@root/api/assetClient';
import { getBasicContent, getBoardMembers } from '@root/api/cmsClient';

import Mission from '@root/views/aboutUs/Mission/Mission';
import History from '@root/views/aboutUs/History/History';
import Section from '@root/components/UI/Section/section';
import Team from '@root/views/aboutUs/Team/Team';
import BoardMembers from '@root/views/aboutUs/BoardMembers';

function AboutUsPage(props) {
  const { assets, content, board } = props;
  const topSection = content.filter((x) => x.fields.identifier === 'about-us-top-section');
  const bottomCta = content.filter((x) => x.fields.identifier === 'about-us-bottom-cta');

  return (
    <>
      <Section content={topSection} assets={assets} />
      <Mission content={content} assets={assets} />
      <History content={content} assets={assets} />
      <BoardMembers content={content} board={board} assets={assets} />
      <Team content={content} assets={assets} />
      <Section content={bottomCta} />
    </>
  );
}
export default AboutUsPage;

export async function getStaticProps() {
  const content = await getBasicContent();
  const assets = await getAllAssets();
  const board = await getBoardMembers();

  return {
    props: {
      content,
      assets,
      board,
    },
  };
}
