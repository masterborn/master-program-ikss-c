import Head from 'next/head';

function PageHead(props) {
    const{head} = props;
    
  return (
    <Head>
    <title>{head[0].fields.title}</title>
    <meta property="og:title" content={head[0].fields.title} key="title" />
    <meta name='description' content={`<p>${head[0].fields.text1.content[0].content[0].value}</p>`} key="description" />
    <meta property="og:description" content={`<p>${head[0].fields.text1.content[0].content[0].value}</p>`} key="decription" />
    </Head>
  );
}
export default PageHead;