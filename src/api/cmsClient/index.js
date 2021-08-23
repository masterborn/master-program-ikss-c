import axios from 'axios';
import config from '../../../config';

const apiCms = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/entries?access_token=${config.CONTENTFUL_API_TOKEN}`,
  timeout: 1000,
});
async function getResource(collection = '') {
  const response = await apiCms.get('', {
    params: { content_type: collection },
  });
  return response.data.items;
}
export async function getProjects() {
  const result = await getResource('projects');
  return result;
}
export async function getPartnerLogos() {
  const result = await getResource('partnerLogos');
  return result;
}
export async function getBoardMembers() {
  const result = await getResource('boardMembers');
  return result;
}
export async function getBasicContent() {
  const result = await getResource('basicContent');
  return result;
}
export async function getAllEntries() {
  const result = await getResource();
  return result;
}

