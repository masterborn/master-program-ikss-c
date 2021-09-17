import getAllAssets from '@root/api/assetClient';
import { getBasicContent, getBoardMembers } from '@root/api/cmsClient';
import BoardMembers from '@root/components/About/Board_members/BoardMembers';

function AboutUsPage(props) {
  const { assets, content, board } = props;
  return (
    <>
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
