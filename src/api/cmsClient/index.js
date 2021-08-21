import axios from 'axios';
import config from '../../../config';

// axios.defaults.baseURL = `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/entries?access_token=${config.CONTENTFUL_API_TOKEN}`;
axios.defaults.baseURL = `https://cdn.contentful.com/spaces/n21y2i4hkj4h/environments/master/entries?access_token=ClPRdGtunoUrjFBPxqnbNZ2n8xZSoEUdoc11ek4yBzQ`;

export async function getProjects() {
  const response = await axios.get('', {
    params: { content_type: 'projects' },
  });
  return response.data.items;
}
export async function getPartnerLogos() {
  const response = await axios.get('', {
    params: { content_type: 'pertnerLogos' },
  });
  return response.data.items;
}
export async function getBoardMembers() {
  const response = await axios.get('', {
    params: { content_type: 'boardMembers' },
  });
  return response.data.items;
}
export async function getBasicContent() {
  const response = await axios.get('', {
    params: { content_type: 'basicContent' },
  });
  return response.data.items;
}

export async function getAllEntries() {
  const response = await axios.get('');
  return response.data.items;
}
