import getAllAssets from '@root/api/assetClient';
// import Mission from '@root/views/aboutUs/Mission/Mission';
// import History from '@root/views/aboutUs/History/History';
import { getBasicContent, getBoardMembers } from '@root/api/cmsClient';
import BoardMembers from '@root/components/About/Board_members/BoardMembers';

function AboutUsPage(props) {
  const { assets, content, board } = props;
  return (
    <>
      {/* <Mission content={content} assets={assets} />
      <History content={content} assets={assets} /> */}
      <BoardMembers content={content} board={board} assets={assets} />
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
