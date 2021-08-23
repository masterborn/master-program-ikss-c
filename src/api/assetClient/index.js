import axios from 'axios';
import config from '../../../config';

const url = `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/assets?access_token=${config.CONTENTFUL_API_TOKEN}`;

async function getResource() {
  const response = await axios.get(url);
  return response.data.items;
}
export default async function getAllAssets() {
  const result = await getResource();
  console.log(result, 'result');
  return result;
}
