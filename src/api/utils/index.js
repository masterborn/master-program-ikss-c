import axios from 'axios';
import config from '../../../config';

let url;
function getUrl(type) {
  url = `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/${type}?access_token=${config.CONTENTFUL_API_TOKEN}`;
  return url;
}

export default async function getResource(collection = '') {
  if (collection) {
    const response = await axios.get(getUrl('entries'), {
      params: { content_type: collection },
    });
    return response.data.items;
  }
  const response = await axios.get(getUrl('assets'));
  return response.data.items;
}

export function extractImageUrl(image1, assets) {
  let url;
  if (image1) {
    url = assets.find((image) => image.sys.id === image1.sys.id).fields.file.url;
    return url;
  }
  return null;
}
