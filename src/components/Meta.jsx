import Head from 'next/head';

function Meta() {
  return (
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="shortcut icon" href="/public/static/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css"
      />
      <title>Ikss</title>
    </Head>
  );
}

export default Meta;
