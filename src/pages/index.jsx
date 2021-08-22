import Banner from '@root/components/main/projects/Banner/banner';
import { getBasicContent } from '../api/cmsClient/index';

function HomePage(props) {
  return (
    <>
      <Banner context={props} />
    </>
  );
}
export default HomePage;

export async function getStaticProps() {
  const basicContent = await getBasicContent();
  return {
    props: {
      basicContent,
    },
  };
}
